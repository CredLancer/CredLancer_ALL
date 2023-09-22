

// The 'credlancer_rating_survey' program.


program credlancer_rating_survey_v3.aleo {
	// 评审项目id 列表
	mapping surveys: field => bool;
	// record
	struct Rating {
		master:address,
		user_id:field,
		survey_id:field,
		amount:u64,
	}

	// 项目总评分
	mapping survey_statistic_score : field => u64;
	// 评价总人数
	mapping survey_statistic_num:field=>u64;
	// 分配的Rating列表
	mapping surveys_ratings: field => Rating;
	// (仅项目方可以执行) 将survey_id，status存人surveys表 创建一个“评审项目”。 TODO 默认status 为true
	transition create_survey (survey_id:field,status:bool){
		assert_eq(self.caller, aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns);
		return then finalize(survey_id,status);
	}

	finalize create_survey(new_survey_id:field,new_status:bool) {
		let contains:bool = Mapping::contains(surveys, new_survey_id);
		assert(!contains);
		Mapping::set(surveys, new_survey_id,new_status);
	}

	transition add_assessor(assessor_id:address, userid:field, survey_id:field)-> (Rating, field) {
		assert_eq(self.caller, aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns);
		let newRating: Rating = Rating {
			master:assessor_id,
			user_id: userid,
			survey_id:survey_id,
			amount:10u64,
		};

		let key_name: field = userid + survey_id;
		return (newRating, key_name) then finalize(newRating, key_name);
	}

	finalize add_assessor(newRating:Rating,key_name:field){
		let contains:bool = Mapping::contains(surveys_ratings, key_name);
		assert(!contains);
		Mapping::set(surveys_ratings, key_name, newRating);
	}

	transition submit_assessor(userid:field, survey_id:field, amount:u64){
		assert(amount<=10u64);
		return then finalize(self.caller, amount, userid, survey_id);
	}

	finalize submit_assessor(assessor_address:address, amount:u64, userid:field, survey_id:field,) {
		let key_name:field = userid + survey_id;
		let contains:bool = Mapping::contains(surveys_ratings, key_name);
		assert(contains);
		let oldRating:Rating = Mapping::get(surveys_ratings, key_name);
		assert(oldRating.amount >= amount);

        //确定是调用本人投票
        assert_eq(assessor_address, oldRating.master);
		let current_survey_statistic_score:u64 = Mapping::get_or_use(survey_statistic_score, survey_id, 0u64);
		let current_survey_statistic_num:u64 = Mapping::get_or_use(survey_statistic_num, survey_id, 0u64);
		if oldRating.amount == 10u64 {
			Mapping::set(survey_statistic_num,survey_id,current_survey_statistic_num+1u64);
		}

		Mapping::set(survey_statistic_score, survey_id,current_survey_statistic_score + amount);
		let newRating: Rating = Rating {
			master:oldRating.master,
			user_id: oldRating.user_id,
			survey_id:oldRating.survey_id,
			amount:oldRating.amount - amount,
		};

		Mapping::set(surveys_ratings, key_name, newRating);
	}

}
