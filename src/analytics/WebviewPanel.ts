import * as vscode from 'vscode';
import { DocumentService } from '../services/DocumentService';

export class AnalyticsWebviewPanel {
    public static currentPanel: AnalyticsWebviewPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private _disposables: vscode.Disposable[] = [];

    private constructor(panel: vscode.WebviewPanel) {
        this._panel = panel;

        // Set the webview's initial html content
        this._update();

        // Listen for when the panel is disposed
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // Update the content based on view changes
        this._panel.onDidChangeViewState(
            e => {
                if (this._panel.visible) {
                    this._update();
                }
            },
            null,
            this._disposables
        );
    }

    public static createOrShow(extensionUri: vscode.Uri) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        // If we already have a panel, show it.
        if (AnalyticsWebviewPanel.currentPanel) {
            AnalyticsWebviewPanel.currentPanel._panel.reveal(column);
            AnalyticsWebviewPanel.currentPanel._update();
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            'wordCounterAnalytics',
            'Word Counter Analytics',
            column || vscode.ViewColumn.One,
            {
                // Enable javascript in the webview
                enableScripts: true,
                // And restrict the webview to only loading content from our extension's `media` directory.
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
            }
        );

        AnalyticsWebviewPanel.currentPanel = new AnalyticsWebviewPanel(panel);
    }

    public dispose() {
        AnalyticsWebviewPanel.currentPanel = undefined;

        // Clean up our resources
        this._panel.dispose();

        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }

    private _update() {
        const webview = this._panel.webview;
        this._panel.title = 'Document Analytics';
        this._panel.webview.html = this._getHtmlForWebview(webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const stats = DocumentService.getActiveDocumentStats();
        const editor = vscode.window.activeTextEditor;
        const fileName = editor ? editor.document.fileName.split(/[\\/]/).pop() : 'No active file';

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Word Counter Analytics</title>
                <style>
                    body {
                        font-family: var(--vscode-font-family);
                        padding: 20px;
                        color: var(--vscode-editor-foreground);
                        background-color: var(--vscode-editor-background);
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    .card {
                        background-color: var(--vscode-editorWidget-background);
                        border: 1px solid var(--vscode-widget-border);
                        border-radius: 6px;
                        padding: 20px;
                        margin-bottom: 20px;
                    }
                    .header {
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid var(--vscode-widget-border);
                    }
                    .stat-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                    .stat-item {
                        display: flex;
                        flex-direction: column;
                    }
                    .stat-label {
                        font-size: 0.9em;
                        color: var(--vscode-descriptionForeground);
                        margin-bottom: 4px;
                    }
                    .stat-value {
                        font-size: 1.8em;
                        font-weight: bold;
                        color: var(--vscode-textLink-foreground);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="card">
                        <div class="header">
                            <h2>Document Analytics</h2>
                            <p>File: <strong>${fileName}</strong></p>
                        </div>
                        <div class="stat-grid">
                            <div class="stat-item">
                                <span class="stat-label">Words</span>
                                <span class="stat-value">${stats.wordCount}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Characters (Total)</span>
                                <span class="stat-value">${stats.charCount}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Characters (No Spaces)</span>
                                <span class="stat-value">${stats.charCountNoSpaces}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Lines</span>
                                <span class="stat-value">${stats.lineCount}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Estimated Reading Time</span>
                                <span class="stat-value">${stats.readingTimeMinutes} min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </html>`;
    }
}
