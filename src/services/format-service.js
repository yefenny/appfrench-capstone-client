const FormatService = {
  firstUpperCaser(word) {
    const first = word[0].toUpperCase();
    return first + word.slice(1).toLowerCase();
  }
};

export default FormatService;
