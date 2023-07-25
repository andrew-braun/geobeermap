export function insertCloudinaryParams(url, params) {
	if (!url) return null

	const cloudinaryURL =
		url.slice(0, url.indexOf("/upload/") + 8) +
		params +
		"/" +
		url.slice(url.indexOf("/upload/") + 8, url.length)

	return cloudinaryURL
}

export function insertCloudinaryFolder(url, folderName) {
	if (!url) return null

	const cloudinaryUrl = url.split("/")
	cloudinaryUrl.splice(7, 0, folderName)

	return cloudinaryUrl.join("/")
}
