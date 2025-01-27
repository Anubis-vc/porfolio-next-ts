export function formatDate(date: Date) {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return `${month}, ${year}`
}


// come back in the morning. pass the _ref part of the image into here for dims
export function formatDimensions(url: string) {
	const separators = /[x\.]/
	const nums = url.split('-')[2].split(separators);
	return { width: Number(nums[0]), height: Number(nums[1]) };
}