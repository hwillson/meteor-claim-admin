const claimStatusLookup = {

  codes: {
    all: {
      id: 'all',
      label: 'All',
    },
    received: {
      id: 'received',
      label: 'Received',
    },
    approved: {
      id: 'approved',
      label: 'Approved',
    },
    deficient: {
      id: 'deficient',
      label: 'Deficient',
    },
    rejected: {
      id: 'rejected',
      label: 'Rejected',
    },
  },

  labelValues() {
    const labelValues = [];
    Object.keys(this.codes).forEach(code => {
      if (code !== 'all') {
        labelValues.push({
          label: this.codes[code].label,
          value: this.codes[code].id,
        });
      }
    });
    return labelValues;
  },

  getLabel(id) {
    let label;
    if (id) {
      label = this.codes[id].label;
    }
    return label;
  },

};

export default claimStatusLookup;
