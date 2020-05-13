const apiKey = 'O_C7-54Y0ojq7YBIcGT2A_JyKDeCbyMiIjcYvqao0uqMyrtpUxR-x9MHd0sbnegjsU3-jvUdTC9UpcUJ6391aeYyUJgd_dwiNnqzjV-Ptx99jy7qjp-L1tq6HG68XnYx';

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }}
        ).then(
            response => {
                return response.json()
                 
            }
        ).then(
            jsonResponse => {
                if (jsonResponse.businesses) {
                   return jsonResponse.businesses.map(
                        business => {
                            return {
                                id: business.id,
                                imgSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zipCode,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount:  business.review_count
                            }
                        }
                    )
                }
            }
        )
    }

};

export default Yelp