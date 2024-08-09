import { UseMutationOptions } from "@tanstack/react-query";

type MutationOptionsWithoutFn<
  // eslint-disable-next-line
  TData = any,
  // eslint-disable-next-line
  TError = any,
  TVariables = void,
  TContext = unknown,
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">;

export type { MutationOptionsWithoutFn };
