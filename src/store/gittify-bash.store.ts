import { create } from "zustand";

export const bashScriptSnippet = `git log --since="2022-01-01" --author="<<author.name>>" --pretty=format...`;
export const bashScript = `git log --since="2022-01-01" --author="<<author.name>>" --pretty=format:'{%n "commit": "%H",%n "author": "%an <%ae>",%n "date": "%ad",%n "message": "%f"%n},' | sed '$ s/,$//' | awk 'BEGIN {print "["} {print} END {print "]"}' | jq -c .`;

export interface GittifyBashStore {
  authorName: string | null;
  bashScript: string;
  bashScriptSnippet: string;

  setAuthorName: (name: string) => void;
  updateBashScriptSnippet: () => void;
  updateBashScript: () => void;
}

const useGittifyBashStore = create<GittifyBashStore>((set) => ({
  authorName: null,
  bashScript: String(bashScript),
  bashScriptSnippet: String(bashScriptSnippet),

  setAuthorName: (name: string) => {
    set(() => ({ authorName: name }));
  },

  updateBashScriptSnippet: () => {
    set((state) => ({
      bashScriptSnippet: bashScriptSnippet.replace(
        "<<author.name>>",
        state.authorName ?? "<<author.name>>"
      ),
    }));
  },

  updateBashScript: () => {
    set((state) => ({
      bashScript: bashScript.replace(
        "<<author.name>>",
        state.authorName ?? "<<author.name>>"
      ),
    }));
  },
}));

// if (import.meta.env.VITE_APP_ENVIRONMENT === 'development') devtools(GittifyBashStore);

export default useGittifyBashStore;
