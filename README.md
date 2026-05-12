# Word Counter Pro AI

A production-quality VS Code extension that tracks accurate word count, character count, lines, and calculates reading time with real-time status bar updates and analytics.

---

## Features

- **Word Count**: Accurately counts words in your active document.
- **Character Count**: Tracks total characters and characters without spaces.
- **Line Count**: Provides the total number of lines.
- **Reading Time**: Estimates how long it will take to read the document.
- **Live Status Bar**: Real-time updates as you type.
- **Analytics Panel**: A beautiful webview panel displaying detailed statistics.

## Installation

1. Open VS Code
2. Go to the Extensions view (\`Ctrl+Shift+X\` / \`Cmd+Shift+X\`)
3. Search for "Word Counter Pro AI"
4. Click Install

## Usage

The extension automatically activates when you open a text file. You will see a live update of the word count in the bottom left status bar.

### Commands

Open the Command Palette (\`Ctrl+Shift+P\` / \`Cmd+Shift+P\`) and type "Word Counter":
- \`Word Counter: Show Analytics\`: Opens the detailed analytics webview panel.
- \`Word Counter: Count Words\`: Displays a quick popup with the current word count.
- \`Word Counter: Toggle Live Counter\`: Enables or disables real-time counting while typing.

### Keyboard Shortcuts

- \`Ctrl+Shift+A\` (Windows/Linux) or \`Cmd+Shift+A\` (Mac): Show Analytics Panel

## Settings

You can customize the extension behavior through VS Code settings (\`Ctrl+,\` / \`Cmd+,\`):

- \`wordCounter.enableLiveCount\`: Enable or disable live updates (default: \`true\`)
- \`wordCounter.readingSpeed\`: Adjust the words-per-minute used for reading time calculation (default: \`200\`)
- \`wordCounter.showStatusBar\`: Show or hide the status bar item (default: \`true\`)

## Development Setup

1. Clone the repository: \`git clone https://github.com/yourusername/word-counter-pro-ai.git\`
2. Run \`npm install\`
3. Press \`F5\` in VS Code to launch the Extension Development Host

### Debugging

- Use \`F5\` to start debugging. This opens a new VS Code window (Extension Development Host).
- Set breakpoints in \`src/extension.ts\` or other files.
- View logs in the Debug Console.

## Publishing to Marketplace

1. Create a Personal Access Token (PAT) in Azure DevOps.
2. Install \`vsce\`: \`npm install -g @vscode/vsce\`
3. Create a publisher: \`vsce create-publisher <publisher-name>\`
4. Login: \`vsce login <publisher-name>\`
5. Package the extension (optional): \`vsce package\`
6. Publish: \`vsce publish\`

## License

MIT License
