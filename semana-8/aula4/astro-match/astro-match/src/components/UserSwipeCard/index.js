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
        <BlurredBackground photo={userToSwipe.photo}/>
        <ProfilePicture src={userToSwipe.photo} onClick={props.getProfile} />
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{userToSwipe.name},</UserName>
            <UserAge>{userToSwipe.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  }
}

export default UserSwipeCard

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object,
  getProfile: PropTypes.func.isRequired,
}

