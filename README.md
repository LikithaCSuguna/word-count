# Word Counter Pro AI

A production-quality VS Code extension that provides accurate word count, character count, line count, and estimated reading time with real-time status bar updates and detailed analytics.

![VS Code](https://img.shields.io/badge/VS%20Code-Extension-blue)
![TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

##  Features

- Accurate Word Count
- Character Count
- Character Count Without Spaces
- Total Line Count
- Estimated Reading Time
- Real-Time Status Bar Updates
- Interactive Analytics Dashboard
- Lightweight and Fast
- Clean UI Experience

---

## 📦 Installation

### Install from VS Code Marketplace

1. Open **VS Code**
2. Open Extensions Panel

```bash
Ctrl + Shift + X
```

Mac:

```bash
Cmd + Shift + X
```

3. Search:

```bash
Word Counter Pro AI
```

4. Click **Install**

---

## Usage

The extension automatically activates when you open a text file.

You will see a live word counter in the bottom-left status bar.

---

## 🛠 Commands

Open Command Palette:

```bash
Ctrl + Shift + P
```

Mac:

```bash
Cmd + Shift + P
```

Search for:

| Command | Description |
|---|---|
| `Word Counter: Show Analytics` | Opens analytics dashboard |
| `Word Counter: Count Words` | Shows quick word count popup |
| `Word Counter: Toggle Live Counter` | Enable/Disable live counting |

---

## ⌨ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Shift + A` | Open Analytics Panel (Windows/Linux) |
| `Cmd + Shift + A` | Open Analytics Panel (Mac) |

---

## ⚙️ Settings

Customize extension settings from:

```bash
Ctrl + ,
```

Mac:

```bash
Cmd + ,
```

### Available Settings

| Setting | Description | Default |
|---|---|---|
| `wordCounter.enableLiveCount` | Enable or disable live counting | `true` |
| `wordCounter.readingSpeed` | Words per minute for reading time | `200` |
| `wordCounter.showStatusBar` | Show or hide status bar item | `true` |

---

## 📊 Analytics Dashboard

The analytics dashboard provides:

- Total Words
- Total Characters
- Characters Without Spaces
- Total Lines
- Estimated Reading Time

---

## 🧑‍💻 Built With

- TypeScript
- VS Code Extension API
- Node.js
- Webview API

---

## 📁 Project Structure

```bash
word-count/
│
├── src/
├── .github/
├── package.json
├── tsconfig.json
├── README.md
└── CHANGELOG.md
```

---

## 🔧 Development Setup

### Clone Repository

```bash
git clone https://github.com/dayananda-ks/word-count.git 
```

### Open Project

```bash
cd word-count
```

### Install Dependencies

```bash
npm install
```

### Run Extension

Press:

```bash
F5
```

This launches the **Extension Development Host**.

---

##  Debugging

- Press `F5` to start debugging
- Set breakpoints inside:

```bash
src/extension.ts
```

- View logs in the **Debug Console**

---

##  Publishing to VS Code Marketplace

### Install VSCE

```bash
npm install -g @vscode/vsce
```

### Create Publisher

```bash
vsce create-publisher dayananda-ks
```

### Login

```bash
vsce login dayananda-ks
```

### Package Extension

```bash
vsce package
```

### Publish Extension

```bash
vsce publish
```


## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to improve.

---

## License

MIT License

---

## 👨‍💻 Author

Developed by [dayananda-ks](https://github.com/dayananda-ks)
