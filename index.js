require('dotenv').config()

const { WebClient } = require('@slack/web-api')
const moment = require('moment-timezone')

const token = process.env.SLACK_TOKEN
const web = new WebClient(token)

const CORE_CHANNEL_ID = `GK4SPTK9V`
const CORE_TEAM_USER_GROUP = `SG5BB91BP`

const firstTouchMaintenanceMessage = require(`./first-touch-maintenance-message`)

// const report = firstTouchMaintenanceMessage(maintainers)

// const res = web.chat
//   .postMessage({
//     channel: `GK4SPTK9V`,
//     blocks: report,
//   })
//   .then(console.log)
//   .catch(console.log)

const getUsersForGroup = async usergroup_id => {
  const users = await web.usergroups.users
    .list({
      usergroup: usergroup_id,
    })
    .then(({ users: user_ids }) => {
      return Promise.all(
        user_ids.map(user =>
          web.users
            .info({
              user,
              include_locale: true,
            })
            .then(({ user }) => user)
        )
      )
    })
  return users
}

const scheduleMessageForUser = async (user_id, day = 'Monday') => {
  const { user } = await web.users.info({
    user_id,
    include_locale: true,
  })

  // Get a timestamp for
  // 1. 9 AM on
  // 2. the day passed in
  // 3. in the next week
  // 4. in the user's locale
  const timestamp = moment()
    .add(1, 'w')
    .days(day)
    .tz(user.tz)
    .startOf('date')
    .add(9, 'h')

  await web.chat.scheduleMessage({
    blocks: [
      {
        type: `section`,
        text: {
          type: `mrkdwn`,
          text: `<@${user.id}> is the First Touch Maintainer for the day`,
        },
      },
    ],
    post_at: timestamp.unix(),
    channel: CORE_CHANNEL_ID,
  })

  console.log(
    `Reminder scheduled for ${user.real_name} at ${timestamp.format(
      'dddd, MMMM Do YYYY, h:mm:ss a zz'
    )}`
  )
}

async function start() {
  const users = await getUsersForGroup(CORE_TEAM_USER_GROUP)
  console.log(users)
}

start()
