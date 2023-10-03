import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from "@apollo/client";
import { DELETE_SURVEY } from "../../utils/mutations";


const HomepageSurveyRender = ({id,title}) => {
    const[showicon,setshowicon] = useState(true)
    const [deleteSurvey, { error }] = useMutation(DELETE_SURVEY);

    return(
        <div>
            {
                showicon ?
                    <div>
                    <Link to={{ pathname: `/survey/${id}` }}>
                    {title}
                    </Link>
                    <FontAwesomeIcon icon={faTrash} size="xl" className="icon" 
                    onClick={() => 
                        {
                            deleteSurvey({variables: { _id: id }})
                            setshowicon(false)
                        }}
                    />
                </div>
                :
                null
            }

        </div>
    )
}


export default HomepageSurveyRender;
