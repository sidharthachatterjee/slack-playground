module.exports = maintainers => {
  const report = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          'sup who wants to do first touch, pick days pls, faster finger first',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Monday',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: maintainers.map(maintainer => {
          return {
            text: {
              type: 'plain_text',
              text: maintainer.name,
              emoji: true,
            },
            value: maintainer.slackUsername,
          }
        }),
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Tuesday',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: maintainers.map(maintainer => {
          return {
            text: {
              type: 'plain_text',
              text: maintainer.name,
              emoji: true,
            },
            value: maintainer.slackUsername,
          }
        }),
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Wednesday',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: maintainers.map(maintainer => {
          return {
            text: {
              type: 'plain_text',
              text: maintainer.name,
              emoji: true,
            },
            value: maintainer.slackUsername,
          }
        }),
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Thursday',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: maintainers.map(maintainer => {
          return {
            text: {
              type: 'plain_text',
              text: maintainer.name,
              emoji: true,
            },
            value: maintainer.slackUsername,
          }
        }),
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Friday',
      },
      accessory: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: maintainers.map(maintainer => {
          return {
            text: {
              type: 'plain_text',
              text: maintainer.name,
              emoji: true,
            },
            value: maintainer.slackUsername,
          }
        }),
      },
    },
  ]
  return report
}
