export function insertCloudinaryParams(url, params) {
	const cloudinaryURL =
		url.slice(0, url.indexOf("/upload/") + 8) +
		params +
		"/" +
		url.slice(url.indexOf("/upload/") + 8, url.length)

	return cloudinaryURL
}
