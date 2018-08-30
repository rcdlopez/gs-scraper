const axios = require('axios');

export default {
  hideCard: function(card) {
    return axios.post('http://localhost:3000/api/hidden', card);
  },
  getHiddenCards: function() {
    return axios.get('http://localhost:3000/api/hidden');
  },
  showCard: function(card) {
    const hidden = this.getHiddenCards();
    if (hidden) {
      const newHidden = [...hidden].filter(i => i !== card.id);
      localStorage.setItem('hiddenCards', JSON.stringify(newHidden));
    }
  },
  clearHidden: function() {
    localStorage.removeItem('hiddenCards');
  }
};
