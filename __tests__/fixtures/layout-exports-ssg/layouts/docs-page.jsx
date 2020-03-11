import { frontMatter as other} from '../pages/docs/intro.mdx'

export async function getStaticProps() {
  console.log('getStaticProps called')
  return {props: {}}
}

export default (frontMatter) => {
  return function docsPageLayout({ children }) {
    return (
      <>
        <p>LAYOUT TEMPLATE</p>
        <h1>{frontMatter.title}</h1>
        {children}
      </>
    )
  }
}