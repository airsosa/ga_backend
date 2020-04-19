'use strict';

const router = require('express').Router();

router.route('/').get((req, res) => {
    let data = [
	{'title': 'Promoting the Growth We Want',
	 'body': 'Bla Bla Bla',
	 'images': [null, null, null]
	},
	{'title': 'Quality Assured',
	 'body': 'Blo Blo Blo',
	 'images': ['image 1']
	},
	{'title': 'Seed Development',
	 'body': 'Slo Slo Slo',
	 'images': []
	}
    ];
    res.status(200).json(data);
});

module.exports = router;
