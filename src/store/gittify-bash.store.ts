import { create } from "zustand";

export const bashScriptSnippet = `git log --since="<<commitsSinceDate>>" --author="<<author.name>>" --pretty=format...`;
export const bashScript = `git log --since="<<commitsSinceDate>>" --author="<<author.name>>" --pretty=format:'{%n "commit": "%H",%n "author": "%an <%ae>",%n "date": "%ad",%n "message": "%f"%n},' | sed '$ s/,$//' | awk 'BEGIN {print "["} {print} END {print "]"}' | jq -c .`;

export const formatDefaultDate = () =>
  `${new Date().getFullYear().toString()}-01-01`;

export interface GittifyBashStore {
  authorName: string | null;
  bashScript: string;
  bashScriptSnippet: string;
  commitsSinceDate: string | null;

  setAuthorName: (name: string) => void;
  updateBashScriptSnippet: () => void;
  updateBashScript: () => void;

  setCommitSinceDate: (date: string) => void;
}

const useGittifyBashStore = create<GittifyBashStore>((set) => ({
  authorName: null,
  commitsSinceDate: null,
  bashScript: String(bashScript),
  bashScriptSnippet: String(bashScriptSnippet),

  setAuthorName: (name: string) => {
    set(() => ({ authorName: name }));
  },

  updateBashScriptSnippet: () => {
    set((state) => ({
      bashScriptSnippet: bashScriptSnippet
        .replace("<<author.name>>", state.authorName ?? "<<author.name>>")
        .replace(
          "<<commitsSinceDate>>",
          state.commitsSinceDate ?? formatDefaultDate()
        ),
    }));
  },

  updateBashScript: () => {
    set((state) => ({
      bashScript: bashScript
        .replace("<<author.name>>", state.authorName ?? "<<author.name>>")
        .replace(
          "<<commitsSinceDate>>",
          state.commitsSinceDate ?? formatDefaultDate()
        ),
    }));
  },

  setCommitSinceDate: (date: string) => {
    set(() => ({ commitsSinceDate: date }));
  },
}));

// if (import.meta.env.VITE_APP_ENVIRONMENT === 'development') devtools(GittifyBashStore);

export default useGittifyBashStore;
