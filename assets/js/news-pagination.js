(function () {
  var newsItems = document.querySelectorAll("[data-news-item]");
  var loadMoreButton = document.getElementById("news-load-more");
  var visibleCount = 5;
  var pageSize = 5;

  if (!loadMoreButton || newsItems.length <= visibleCount) {
    return;
  }

  for (var index = visibleCount; index < newsItems.length; index += 1) {
    newsItems[index].hidden = true;
  }

  loadMoreButton.hidden = false;
  loadMoreButton.addEventListener("click", function () {
    var nextVisibleCount = Math.min(visibleCount + pageSize, newsItems.length);

    for (var index = visibleCount; index < nextVisibleCount; index += 1) {
      newsItems[index].hidden = false;
    }

    visibleCount = nextVisibleCount;

    if (visibleCount >= newsItems.length) {
      loadMoreButton.hidden = true;
    }
  });
})();