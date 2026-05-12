import * as vscode from 'vscode';
import { DocumentService } from '../services/DocumentService';

export class StatusBarManager {
    private statusBarItem: vscode.StatusBarItem;

    constructor() {
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
        this.statusBarItem.command = 'wordCounter.showAnalytics';
    }

    public update(): void {
        const config = DocumentService.getConfiguration();
        
        if (!config.showStatusBar) {
            this.statusBarItem.hide();
            return;
        }

        const stats = DocumentService.getActiveDocumentStats();
        
        this.statusBarItem.text = `$(book) ${stats.wordCount} Words`;
        this.statusBarItem.tooltip = `Words: ${stats.wordCount}\nChars: ${stats.charCount}\nLines: ${stats.lineCount}\nReading Time: ~${stats.readingTimeMinutes} min`;
        this.statusBarItem.show();
    }

    public dispose(): void {
        this.statusBarItem.dispose();
    }
}
