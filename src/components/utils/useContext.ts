import { Context } from 'react';
import { useContext as reactUseContext } from 'react';

/**
 * function wraps original useContext function in order to dd additional Error for easy debug (unreadable original error)
 * @param providedContext
 */
export const useContext = (providedContext: Context<any>) => {
  const context = reactUseContext(providedContext);

  if (!context) {
    throw new Error(
      `${providedContext.displayName} has to be used within <${providedContext.displayName}.Provider>`,
    );
  }

  return context;
};
