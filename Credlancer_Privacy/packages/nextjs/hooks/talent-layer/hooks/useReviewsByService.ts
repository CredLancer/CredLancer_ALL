import { useEffect, useState } from "react";
import { IReview } from "../../../types/talentLayer";
import { getReviewsByService } from "../../../utils/queries/reviews";

const useReviewsByService = (serviceId: string): { reviews: IReview[] } => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsByService(serviceId);
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [serviceId]);

  return { reviews };
};

export default useReviewsByService;
