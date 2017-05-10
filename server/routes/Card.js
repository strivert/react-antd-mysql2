import express from 'express';

const router = express.Router();

/*
	ACCOUNT SIGNUP: POST /api/account/signup
	BODY SAMPLE: {"username":"test", "password":"test"}
	ERROR CODES:
		1: BAD USERNAME
		2: BAD PASSWORD
		3: USERNAME EXISTS
*/

router.post('/addCard', (req,res)=>{	
	return res.json({success:true})
})

export default router;