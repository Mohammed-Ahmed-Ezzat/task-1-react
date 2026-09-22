import { Link, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'

function renderContent(content) {
  var blocks = content.split('\n\n')
  var nodes = []
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i]
    if (block.indexOf('## ') === 0) {
      nodes.push(
        <h2 key={i} className="text-xl font-extrabold mt-8 mb-3 text-white">
          {block.slice(3)}
        </h2>
      )
    } else if (block.trim() !== '') {
      nodes.push(
        <p key={i} className="text-mist leading-8 mb-4">
          {block}
        </p>
      )
    }
  }
  return nodes
}

var colorMap = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/30' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/15', border: 'border-blue-500/30' },
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/15', border: 'border-orange-500/30' }
}

function BlogDetails(props) {
  var posts = props.data.posts
  var categories = props.data.categories
  var params = useParams()
  var slug = params.slug

  var post = null
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) {
      post = posts[i]
      break
    }
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-28 text-center">
        <h1 className="text-3xl font-extrabold mb-4">المقال غير موجود</h1>
        <p className="text-mist mb-8">لم نتمكن من العثور على المقال الذي تبحث عنه.</p>
        <Link to="/blog" className="bg-ember hover:bg-ember-light text-ink font-bold px-6 py-3 rounded-full transition-colors">
          العودة إلى المدونة
        </Link>
      </div>
    )
  }

  var found = null
  for (var c = 0; c < categories.length; c++) {
    if (categories[c].name === post.category) {
      found = categories[c]
      break
    }
  }
  var colorKey = found ? found.color : 'orange'
  var style = colorMap[colorKey] || colorMap.orange

  var relatedPosts = []
  for (var j = 0; j < posts.length; j++) {
    if (posts[j].category === post.category && posts[j].slug !== post.slug && relatedPosts.length < 3) {
      relatedPosts.push(posts[j])
    }
  }

  var tagChips = []
  for (var k = 0; k < post.tags.length; k++) {
    tagChips.push(
      <span key={post.tags[k]} className="text-xs font-semibold text-mist border border-line rounded-full px-3 py-1">
        {'#' + post.tags[k]}
      </span>
    )
  }

  var relatedCards = []
  for (var m = 0; m < relatedPosts.length; m++) {
    relatedCards.push(<PostCard key={relatedPosts[m].id} post={relatedPosts[m]} categories={categories} />)
  }

  return (
    <article>
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-24 relative">
        <div className="rounded-2xl border border-line bg-panel p-6 sm:p-10">
          <Link to="/blog" className="text-sm text-mist hover:text-ember transition-colors">
            ← العودة إلى المدونة
          </Link>

          <span className={'mt-5 inline-block text-xs font-bold px-3 py-1 rounded-full border ' + style.bg + ' ' + style.text + ' ' + style.border}>
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug mt-4 mb-5">{post.title}</h1>

          <div className="flex items-center gap-3 pb-6 border-b border-line">
            <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full object-cover" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{post.author.name}</p>
              <p className="text-xs text-mist">{post.author.role}</p>
            </div>
            <span className="mr-auto text-xs text-mist flex flex-col items-end gap-1">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </span>
          </div>

          <div className="pt-6">{renderContent(post.content)}</div>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-line">{tagChips}</div>
        </div>
      </div>

      {relatedCards.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-extrabold mb-8">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{relatedCards}</div>
        </section>
      ) : null}
    </article>
  )
}

export default BlogDetails
