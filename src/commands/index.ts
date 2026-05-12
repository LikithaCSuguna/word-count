import * as vscode from 'vscode';
import { DocumentService } from '../services/DocumentService';
import { AnalyticsWebviewPanel } from '../analytics/WebviewPanel';

export function registerCommands(context: vscode.ExtensionContext, updateStatusBar: () => void) {
    const showAnalyticsCommand = vscode.commands.registerCommand('wordCounter.showAnalytics', () => {
        AnalyticsWebviewPanel.createOrShow(context.extensionUri);
    });

    const countWordsCommand = vscode.commands.registerCommand('wordCounter.countWords', () => {
        const stats = DocumentService.getActiveDocumentStats();
        vscode.window.showInformationMessage(`Word Count: ${stats.wordCount}`);
    });

    const toggleLiveCounterCommand = vscode.commands.registerCommand('wordCounter.toggleLiveCounter', async () => {
        const config = vscode.workspace.getConfiguration('wordCounter');
        const currentValue = config.get<boolean>('enableLiveCount');
        await config.update('enableLiveCount', !currentValue, vscode.ConfigurationTarget.Global);
        
        vscode.window.showInformationMessage(
            `Live Counter: ${!currentValue ? 'Enabled' : 'Disabled'}`
        );
        updateStatusBar();
    });

    context.subscriptions.push(showAnalyticsCommand, countWordsCommand, toggleLiveCounterCommand);
}
