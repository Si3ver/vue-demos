import './NewsContent.css';

function NewsContent({content}) {
  return (
    <div className="news-content">
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  );
}

export default NewsContent;
