import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
} from './styled'
import {getProfile} from '../../actions/profiles'
import { connect } from 'react-redux';


class UserSwipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }



  render(props) {
    const { userToSwipe, animationDirection: animation } = this.props


    return (
    
      <UserCardWrapper animation={animation}>
        <BlurredBackground photo={userToSwipe.photo}  onClick={props.getProfile}/>
        <ProfilePicture src={userToSwipe.photo}  />
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{userToSwipe.name},</UserName>
            <UserAge>{userToSwipe.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  }
}

const mapStateToProps = (state) => ({
})



function mapDispatchToProps(dispatch) {
	return {
		getProfile: () => dispatch(getProfile()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSwipeCard)

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object,
  getProfile: PropTypes.func.isRequired,
}


