//First task
db.test.find({
	"scores.score": {
		$gt: 93,
		$lt: 95
	}
});

//Second task
db.test.aggregate([
	{
		$unwind: "$scores"
	},

	{
		$match: {
			"scores.score" : {$gt: 90},
			"scores.type" : "exam"
		}
	},

	//Just for simpliffy the output
	{
		$project: {
			name: true,
			exam_score: "$scores.score"
		}
	}
]);

//Third task
db.test.update(
	{
		name: "Vinnie Auerbach"
	},
	{
		$set: {accepted: "true"}
	}
);
