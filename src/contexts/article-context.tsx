import { createContext, useState, ReactNode } from 'react';

interface ArticleContextType {
  articleContext: string[];
  setArticleContext: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

interface ArticleContextProviderProps {
  children: ReactNode;
}

export const ArticleContextProvider: React.FC<ArticleContextProviderProps> = ({ children }) => {
  const [articleContext, setArticleContext] = useState<string[]>([]);

  const value: ArticleContextType = {
    articleContext,
    setArticleContext
  };

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
};