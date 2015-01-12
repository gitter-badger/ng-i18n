ngI18n.filter('i18n', ['I18N', function(I18N) {

  /**
   * Retrieves translation for a given key
   * @param  {String} key     The key to be retrieved
   * @param  {Dynamic} args   variables to be used in the string replacement
   * @return {String}         Translated string
   */
  return function(key, args) {
    // console.log();
    if (!key) {
      return;
    }
    return I18N.get(key).replace(/\{[^\}]+?\}/g, args);
  };
}]);