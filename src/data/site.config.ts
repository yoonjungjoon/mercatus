interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: '윤정준', // Site author
	title: '오늘의 일자리', // Site title.
	description: '매일 매일 새로 올라온 일자리를 소개해 드려요.', // Description to display in the meta tags
	lang: 'ko-KR',
	ogLocale: 'ko_KR',
	shareMessage: '이 게시물을 공유해요.', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
