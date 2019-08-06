// import vscode from 'vscode'

let terminal = vscode.window.createTerminal(
    {name: "mtl"}
);
terminal.show(true);
// terminal.sendText('yarn build');
// terminal.sendText('cp -rf ./build ./app');
terminal.sendText('mtl debug android');
this.context.workspaceState.update("mtl-preview-url","http://localhost:3000/")