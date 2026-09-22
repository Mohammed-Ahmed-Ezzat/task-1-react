import { Link } from 'react-router-dom'

var colorMap = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/30' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/15', border: 'border-blue-500/30' },
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/15', border: 'border-orange-500/30' }
}

function PostListItem(props) {
  var post = props.post
  var categories = props.categories
  var found = null
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].name === post.category) {
      found = categories[i]
      break
    }
  }
  var colorKey = found ? found.color : 'orange'
  var style = colorMap[colorKey] || colorMap.orange

  return (
    <Link
      to={'/blog/' + post.slug}
      className="group flex flex-col sm:flex-row gap-5 rounded-2xl overflow-hidden border border-line bg-panel hover:border-ember/50 transition-colors p-3"
    >
      <div className="relative sm:w-56 h-40 shrink-0 rounded-xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className={'absolute top-2 right-2 text-xs font-bold px-3 py-1 rounded-full border ' + style.bg + ' ' + style.text + ' ' + style.border}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 py-2 pr-2">
        <div className="flex items-center gap-3 text-xs text-mist mb-2">
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-ember transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-mist line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">{post.author.name}</p>
            <p className="text-xs text-mist">{post.author.role}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostListItem
