 

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./reducers";
// import { authApiSlice } from "@/services/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

const store = makeStore();
const persistor = persistStore(store);

export { store, persistor };

// Note: TypeScript types are removed as they are not applicable in JavaScript```