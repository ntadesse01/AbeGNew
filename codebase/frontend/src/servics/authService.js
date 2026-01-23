import {apiSlice} from "../store/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: `api/login`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: ["auth"],
    }),

    forgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: `auth/forgot-password`,
          method: "POST",
          data: body,
        };
      },
    }),
  }),
});

export const {useForgotPasswordMutation,useLoginMutation} = authApiSlice;
