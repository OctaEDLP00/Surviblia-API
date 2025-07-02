{ pkgs, ... }: {
  channel = "stable-24.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [ pkgs.nodejs_23  pkgs.corepack_23 ];
  env = {};
  idx = {
    extensions = [
      "aaron-bond.better-comments"
      "bierner.emojisense"
      "christian-kohler.npm-intellisense"
      "christian-kohler.path-intellisense"
      "codezombiech.gitignore"
      "eamodio.gitlens"
      "editorconfig.editorconfig"
      "github.vscode-github-actions"
      "humao.rest-client"
      "irongeek.vscode-env"
      "jock.svg"
      "kamikillerto.vscode-colorize"
      "kisstkondoros.vscode-gutter-preview"
      "miguelsolorio.fluent-icons"
      "zhuangtongfa.material-theme"
      "mikestead.dotenv"
      "mrmlnc.vscode-duplicate"
      "oouo-diogo-perdigao.docthis"
      "pflannery.vscode-versionlens"
      "Tobermory.es6-string-html"
      "usernamehw.errorlens"
      "YoavBls.pretty-ts-errors"
      "yzhang.markdown-all-in-one"
      "ms-vscode.vscode-typescript-next"
      "wix.vscode-import-cost"
      "bierner.markdown-preview-github-styles"
      "biomejs.biome"
      "GitHub.vscode-pull-request-github"
      "ibm.output-colorizer"
      "redhat.vscode-yaml"
      "ultram4rine.vscode-choosealicense"
      "marcoq.vscode-typescript-to-json-schema"
      "plievone.vscode-template-literal-editor"
      "miguelsolorio.symbols"
      "rapidapi.vscode-rapidapi-client"
      "rapidapi.vscode-services"
      "alburdette619.docthis-core"
      "visualstudioexptteam.vscodeintellicode"
      "visualstudioexptteam.intellicode-api-usage-examples"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["pnpm" "start"];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };

    workspace = {
      onCreate = {
        pnpm-install = "pnpm install";
      };
    };
  };
}
