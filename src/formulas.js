
export const mergeSortRecorrencia = String.raw`T(n) = \begin{cases}
1 & \text{para $n = 1$}\\
2T(n/2) + n & \text{para $n > 1$}
\end{cases}`;