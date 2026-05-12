import * as vscode from 'vscode';
import { calculateStats } from '../utils/counter';
import { DocumentStats, CounterConfiguration } from '../types';

export class DocumentService {
    public static getActiveDocumentStats(): DocumentStats {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return this.getEmptyStats();
        }

        const document = editor.document;
        const text = document.getText();
        const config = this.getConfiguration();

        return calculateStats(text, config.readingSpeed);
    }

    public static getConfiguration(): CounterConfiguration {
        const config = vscode.workspace.getConfiguration('wordCounter');
        return {
            enableLiveCount: config.get<boolean>('enableLiveCount', true),
            readingSpeed: config.get<number>('readingSpeed', 200),
            showStatusBar: config.get<boolean>('showStatusBar', true)
        };
    }

    public static getEmptyStats(): DocumentStats {
        return {
            wordCount: 0,
            charCount: 0,
            charCountNoSpaces: 0,
            lineCount: 0,
            readingTimeMinutes: 0
        };
    }
}
