import * as vscode from 'vscode';
import { StatusBarManager } from './statusbar/StatusBarManager';
import { registerCommands } from './commands';
import { DocumentService } from './services/DocumentService';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "word-counter-pro-ai" is now active!');

    const statusBarManager = new StatusBarManager();
    context.subscriptions.push(statusBarManager);

    // Initial update
    statusBarManager.update();

    // Register commands
    registerCommands(context, () => statusBarManager.update());

    // Register event listeners for live updates
    let debounceTimer: NodeJS.Timeout | undefined;

    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument((e) => {
            const config = DocumentService.getConfiguration();
            if (!config.enableLiveCount) { return; }

            if (e.document === vscode.window.activeTextEditor?.document) {
                if (debounceTimer) {
                    clearTimeout(debounceTimer);
                }
                debounceTimer = setTimeout(() => {
                    statusBarManager.update();
                }, 300); // 300ms debounce
            }
        })
    );

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(() => {
            statusBarManager.update();
        })
    );

    if (vscode.window.registerWebviewPanelSerializer) {
        vscode.window.registerWebviewPanelSerializer('wordCounterAnalytics', {
            async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
                // Ignore state for now and just recreate
            }
        });
    }
}

export function deactivate() {}
