import React from 'react'
import {
  View,
  Image,
  TouchableOpacity, Text
} from 'react-native'
import styles from './style'



class HeaderSection extends React.Component {
  static defaultProps = {
    seeAll:true
  }

  render(){
    let {title,seeAll,item,onPress} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {seeAll && (
          <TouchableOpacity onPress={()=>onPress(item)}>
            <Text style={styles.seeAll}>{__.t('See All')}</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default HeaderSection
