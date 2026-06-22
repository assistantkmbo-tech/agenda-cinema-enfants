CMS.registerPreviewStyle('/admin/preview.css');

var FilmPreview = createClass({
  render: function () {
    var entry    = this.props.entry;
    var data     = entry.get('data');
    var getAsset = this.props.getAsset;

    var title     = data.get('title')    || '';
    var rawPoster = data.get('poster')   || '';
    var poster    = rawPoster.startsWith('/') ? rawPoster : String(getAsset(rawPoster));

    return h('div', { className: 'preview-wrap' },
      poster && h('img', { className: 'preview-poster', src: poster, alt: title }),
      h('p', { className: 'preview-title' }, title)
    );
  }
});

CMS.registerPreviewTemplate('films', FilmPreview);
