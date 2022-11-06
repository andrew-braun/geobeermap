import { marked } from "marked"
import DOMPurify from "isomorphic-dompurify"

export default function markdown(data) {
	return DOMPurify.sanitize(marked.parse(data))
}
