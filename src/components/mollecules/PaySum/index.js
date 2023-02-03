import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { Gap } from '../../atoms'
import PaySumItem from '../PaySumItem'
import NumberFormatter from '../Number'

const PaySum = ({ title = 'Payment Summary', keyval1, keyval2, keyval3, value1, value2, value3, total, lastkey = 'Total', type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={13}/>
      <PaySumItem
        keyval={keyval1}
        value={value1}
      />
      <Gap height={16} />
      <PaySumItem
        keyval={keyval2}
        value={value2}
      />
      <Gap height={16} />
      <PaySumItem
        keyval={keyval3}
        value={value3}
        type={"red"}
      />
      <Gap height={18} />
      <View style={styles.line}/>
      <Gap height={16} />

      <View style={styles.totalbox}>
        <Text style={styles.totaltext}>{lastkey}</Text>
        <Text style={styles.price}>
            {
              type != 'mine' && (
                <NumberFormatter
                    number={total}
                />
              )
            }
            {
              type == 'mine' && `${total} Days`
            }
        </Text>
      </View>
    </View>
  )
}

export default PaySum

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 232,
        backgroundColor: customColors.def.white,
        elevation: 3,
        borderTopWidth: 1,
        borderTopColor: customColors.def.line,
        padding: 24,
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        lineHeight: 24
    },
    line: {
        height: 1,
        backgroundColor: customColors.def.line
    },
    totalbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totaltext: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.black
    },
    price: {
        fontSize: 18,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1
    }
})