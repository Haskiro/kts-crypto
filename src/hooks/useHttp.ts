import { useCallback, useState } from "react";

import axios from "axios";

type Process = "idle" | "loading" | "succeeded" | "error";

type RequestProps = {
	url: string;
	data: Record<string, string>;
	method: "get" | "post";
	headers: Record<string, string>;
};

export const useHttp = () => {
	const [process, setProcess] = useState<Process>("idle");

	const request = useCallback(
		async ({
			url,
			data = {},
			method = "get",
			headers = {},
		}: RequestProps) => {
			setProcess("loading");

			try {
				const response = await axios({
					url,
					method,
					headers,
					data,
				});

				if (response.status !== 200) {
					throw new Error(
						`Could not fetch ${url}, status: ${response.statusText}`
					);
				}

				return response.data;
			} catch (e) {
				setProcess("error");
				throw e;
			}
		},
		[]
	);

	const clearError = useCallback(() => {
		setProcess("loading");
	}, []);

	return { request, clearError, process, setProcess };
};
