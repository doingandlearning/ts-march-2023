type OptionalBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
