// import vscode from 'vscode'

let terminal = vscode.window.createTerminal(
    {name: "mtl"}
);
terminal.show(true);
terminal.sendText('mtl preview upesn');
