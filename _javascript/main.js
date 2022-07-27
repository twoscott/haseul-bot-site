$(document).ready(() => {
  $(".navbar-burger").click((ev) => {
    ev.stopPropagation();
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  $(".has-dropdown").click((ev) => {
    ev.stopPropagation();
    $(".has-dropdown").toggleClass("is-active");
  });
  $("#commands-dropdown").click(() => {
    $(".navbar-burger").removeClass("is-active");
    $(".navbar-menu").removeClass("is-active");
  });
  $(document.body).click(() => {
    $(".has-dropdown").removeClass("is-active");
    $(".navbar-burger").removeClass("is-active");
    $(".navbar-menu").removeClass("is-active");
  });

  let tooltipSpans = document.getElementsByClassName('tooltip-span');

  $(".tooltip").mousemove((e) => {
    for (let tooltipSpan of tooltipSpans) {
      let x = e.clientX,
        y = e.clientY;
      tooltipSpan.style.top = (y - 30) + 'px';
      tooltipSpan.style.left = (x + 10) + 'px';
    }
  });
});

const PREFIX = ".";
const COMMANDS = {
  "Info": [
    {
      cmds: [
        { name: "userinfo", aliases: ['uinfo', 'memberinfo'] }
      ],
      args: [
        { name: "(user)", examples: ['<span class=\"discord-tag\" >@Scotto</span>', '125414437229297664'] }
      ],
      desc: "Shows information about a user or yourself.",
    },
    {
      cmds: [
        { name: "avatar", aliases: ['dp'] }
      ],
      args: [
        { name: "(user)", examples: ['<span class=\"discord-tag\" >@Scotto</span>', '125414437229297664'] }
      ],
      desc: "Shows the avatar and information about the avatar of a user or yourself.",
    },
    {
      cmds: [
        { name: "serverinfo", aliases: ['sinfo', 'guildinfo'] }
      ],
      desc: "Shows information about the server.",
    },
    {
      cmds: [
        { name: "boosters", aliases: [] }
      ],
      desc: "Shows a list of all the users boosting the server.",
    },
    {
      cmds: [
        { name: "botinfo", aliases: ['binfo', 'clientinfo'] }
      ],
      desc: "Shows information about Haseul Bot.",
    },
    {
      cmds: [
        { name: "github", aliases: ['git'] }
      ],
      desc: "Provides a link to Haseul Bot's <a href=\"https://github.com/haseul/haseul-bot\">GitHub</a> page.",
    },
    {
      cmds: [
        { name: "donate", aliases: ['patreon'] }
      ],
      desc: "Provides a link to Haseul Bot's <a href=\"https://www.patreon.com/haseulbot\">Patreon</a> page.",
    },
    {
      cmds: [
        { name: "donators", aliases: ['patrons', 'donors', 'supporters'] }
      ],
      desc: "Provides a list of all the Discord users who support Haseul Bot on Patreon!",
    }
  ],
  "Reminders": [
    {
      cmds: [
        { name: "remind" },
        { name: "me" }
      ],
      args: [
        { name: 'to' },
        { name: "[reminder]", examples: ['add haseul bot to my server'] },
        { name: "in" },
        { name: "[time]", examples: ['3 hours', '10 minutes', '3s', '1hr', '1 yr', '8 weeks', '5m'] },
      ],
      desc: "Sets a reminder to be sent to you by Haseul Bot through DMs in the given time.",
    },
    {
      cmds: [
        { name: "reminder", aliases: ['reminders'] },
        { name: "list" }
      ],
      desc: "Sends a list of all the pending reminders you have set to your DMs.",
    },
    {
      cmds: [
        { name: "reminders" },
        { name: "clear" }
      ],
      desc: "Deletes all of the pending reminders you have set.",
    },
  ],
  "Management": [
    {
      cmds: [
        { name: "prefix" },
        { name: "set" }
      ],
      args: [
        { name: "[prefix]", examples: ['.', '!', '-', '_'] },
      ],
      desc: "Sets the prefix for Haseul Bot commands. <span class=\"has-text-grey-light\">('.' by default)</span>",
      perms: ["MANAGE_GUILD"]
    },
    {
      cmds: [
        { name: "settings" },
      ],
      desc: "Displays the current server settings.",
      perms: ["MANAGE_GUILD"]
    },
    {
      cmds: [
        { name: "message", aliases: ["msg"] },
        { name: "send" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#general-chat</span>", '482759670637789205'] },
        { name: "[content]", examples: ['Hello!'] }
      ],
      desc: "Sends a message to channel through Haseul Bot.",
      perms: ["MANAGE_MESSAGES"]
    },
    {
      cmds: [
        { name: "message", aliases: ["msg"] },
        { name: "edit" }
      ],
      args: [
        { name: "[message url]", examples: ["<a>https://discordapp.com/channels/482594344390623240/482594344390623244/687638163530973215</a>"] },
        { name: "[new content]", examples: ['Hello! Welcome~'] }
      ],
      desc: "Edits a message from Haseul Bot.",
      perms: ["MANAGE_MESSAGES"]
    },
    {
      cmds: [
        { name: "message", aliases: ["msg"] },
        { name: "get" }
      ],
      args: [
        { name: "[message url]", examples: ["<a>https://discordapp.com/channels/482594344390623240/482594344390623244/687638163530973215</a>"] },
      ],
      desc: "Fetches a message and returns it in a code block, showing the original formatting with <code class=\"has-text-primary\">_~*\<\></code> characters intact.",
      perms: ["MANAGE_MESSAGES"]
    },
    {
      cmds: [
        { name: "poll" },
        { name: "channel" },
        { name: "add" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#suggestions</span>", '482596853792243712'] },
      ],
      desc: "Adds a channel where Haseul Bot will react with a check and cross to every message set in it.",
      perms: ["MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "poll" },
        { name: "channel" },
        { name: "remove", aliases: ['delete'] }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#suggestions</span>", '482596853792243712'] },
      ],
      desc: "Removes a channel where Haseul Bot reacts with a check and cross to every message set in it.",
      perms: ["MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "poll" },
        { name: "toggle" }
      ],
      desc: "Toggles Haseul Bot reacting with a checks and crosses to messages sent in poll channels. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD"]
    },
  ],
  "Moderation": [
    {
      cmds: [
        { name: "muterole" },
        { name: "set" }
      ],
      args: [
        { name: "[role name]", examples: ["Muted", "Mute", "<span class=\"discord-tag\" >@Muted</span>"] },
      ],
      desc: "Sets the role to be used by the mute command. If a role with the provided name does not exist, a role will be created with that name and its permissions will be altered in every channel to deny the <code class=\"has-text-primary\">SEND_MESSAGES</code>, <code class=\"has-text-primary\">ADD_REACTIONS</code>, <code class=\"has-text-primary\">CONNECT</code>, and <code class=\"has-text-primary\">SPEAK</code> permissions.",
      perms: ["MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "muterole" },
        { name: "update" }
      ],
      desc: "Updates the mute role's permissions in every channel to deny the <code class=\"has-text-primary\">SEND_MESSAGES</code>, <code class=\"has-text-primary\">ADD_REACTIONS</code>, <code class=\"has-text-primary\">CONNECT</code>, and <code class=\"has-text-primary\">SPEAK</code> permissions.",
      perms: ["MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "mute" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Mutes a user or multiple users (up to 5 at once) in the server. Note: a mute role must be set first with the <code class=\"has-text-primary\">.muterole set</code> command.",
      perms: ["MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "unmute" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Unmutes a user or multiple users (up to 5 at once) in the server. Note: a mute role must be set first with the <code class=\"has-text-primary\">.muterole set</code> command.",
      perms: ["MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "kick" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Kicks a user or multiple users (up to 5 at once) from the server.",
      perms: ["KICK_MEMBERS"]
    },
    {
      cmds: [
        { name: "ban" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Bans a user or multiple users (up to 5 at once) from the server.",
      perms: ["BAN_MEMBERS"]
    },
    {
      cmds: [
        { name: "unban" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Unbans a user or multiple users (up to 5 at once) from the server.",
      perms: ["BAN_MEMBERS"]
    },
    {
      cmds: [
        { name: "purge" },
      ],
      args: [
        { name: "[user(s)...]", examples: ["<span class=\"discord-tag\" >@Scotto</span>", "<span class=\"discord-tag\" >@User</span>", "125414437229297664"] },
        { name: "(reason)", examples: ["was spamming", "was using naughty words"] },
      ],
      desc: "Bans a user or multiple users (up to 5 at once) from the server and also deletes all messages from the user(s) in the last 24 hours.",
      perms: ["BAN_MEMBERS"]
    },
  ],
  "Logs": [
    {
      cmds: [
        { name: "memberlogs", aliases: ['joinlogs', 'joins'] },
        { name: "channel" },
        { name: "set" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#member-logs</span>", '482759389426483222'] }
      ],
      desc: "Sets the channel for member joins and leaves to be logged in.",
      perms: ["MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "memberlogs", aliases: ['joinlogs', 'joins'] },
        { name: "toggle" }
      ],
      desc: "Toggles member logs on and off. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD"]
    },
    {
      cmds: [
        { name: "greeter" },
        { name: "channel" },
        { name: "set" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#general-chat</span>", '482759670637789205'] }
      ],
      desc: "Sets the channel for new members to be welcomed in by Haseul Bot.",
      perms: ["MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "greeter" },
        { name: "message", aliases: ['msg'] },
        { name: "set" }
      ],
      args: [
        { name: "[message]", examples: ["Welcome member #{memberno} - {user} to {server}!", "{default} Please read the rules in <span class=\"discord-tag\" >#rules</span>!"] }
      ],
      desc: "Sets the message for Haseul Bot to send when new welcoming new members. You can use the following parameters to insert data based on the user that joined: <ul style=\"margin-top:0.5em;\"><li><code class=\"has-text-primary\">{default}</code> - the default randomised welcome message Haseul Bot generates.</li><li><code class=\"has-text-primary\">{user}</code> - The new user's <span class=\"discord-tag\" >@mention</span>.</li><li><code class=\"has-text-primary\">{username}</code> - The new user's username.</li><li><code class=\"has-text-primary\">{discriminator}</code> - The new user's discriminator (#1234).</li><li><code class=\"has-text-primary\">{usertag}</code> - The new user's username with discriminator (user#1234).</li><li><code class=\"has-text-primary\">{server}</code> - The current server name.</li><li><code class=\"has-text-primary\">{memberno}</code> - The new user's member number (e.g. \"Member number {memberno} has joined!\").</li></ul>",
      perms: ["MANAGE_GUILD"]
    },
    {
      cmds: [
        { name: "greeter" },
        { name: "toggle" }
      ],
      desc: "Toggles welcome messages on and off. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD"]
    },
    {
      cmds: [
        { name: "messagelogs", aliases: ['msglogs'] },
        { name: "channel" },
        { name: "set" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#message-logs</span>", '482759389426483222'] }
      ],
      desc: "Sets the channel for edited and deleted messages to be logged in.",
      perms: ["MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "messagelogs", aliases: ['msglogs'] },
        { name: "toggle" }
      ],
      desc: "Toggles message logs on and off. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD"]
    },
  ],
  "Profiles": [
    {
      cmds: [
        { name: "profile" }
      ],
      args: [
        { name: "(user)", examples: ['<span class=\"discord-tag\" >@Scotto</span>', '125414437229297664'] }
      ],
      desc: "Shows the (temporary) profile of a yourself or a provided user.",
    },
    {
      cmds: [
        { name: "leaderboard" }
      ],
      desc: "Shows the top users in the server based on XP.",
    },
    {
      cmds: [
        { name: "leaderboard" },
        { name: "global" }
      ],
      desc: "Shows the top users globally based on XP.",
    }
  ],
  "Reps": [
    {
      cmds: [
        { name: "rep" }
      ],
      args: [
        { name: "[user]", examples: ['<span class=\"discord-tag\" >@Scotto</span>', '125414437229297664'] }
      ],
      desc: "Gives a user a reputation point. Your available reps to give out will be restored to <strong>3</strong> every day at midnight UTC.",
    },
    {
      cmds: [
        { name: "streaks" }
      ],
      desc: "Shows the rep streaks you currently have with other users.",
    },
    {
      cmds: [
        { name: "repboard" }
      ],
      desc: "Shows the top users in the server based on reps.",
    },
    {
      cmds: [
        { name: "repboard" },
        { name: "global" }
      ],
      desc: "Shows the top users globally based on reps.",
    },
    {
      cmds: [
        { name: "streakboard" }
      ],
      desc: "Shows the top pairs of users in the server based on rep streaks.",
    },
    {
      cmds: [
        { name: "streakboard" },
        { name: "global" }
      ],
      desc: "Shows the top pairs of users globally based on rep streaks.",
    },
  ],
  "Last.fm": [
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "set" }
      ],
      args: [
        { name: "[last.fm user]" }
      ],
      desc: "Sets a Last.fm account to be used for future Last.fm commands when no Last.fm username is provided.",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] }
      ],
      args: [
        { name: "(last.fm user)" }
      ],
      desc: "Shows the last 2 tracks you or a Last.fm user listened to. <span class=\"has-text-grey-light\">(shorthand for .fm recent 2)</span>"
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "nowplaying", aliases: ['np'] }
      ],
      args: [
        { name: "(last.fm user)" }
      ],
      desc: "Shows the current or last track that you or a Last.fm user is listening to. <span class=\"has-text-grey-light\">(shorthand for .fm recent 1)</code>",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "yt" }
      ],
      args: [
        { name: "(last.fm user)" }
      ],
      desc: "Shows the first result from a YouTube search for the song you or a provided user is listening to.",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "recent", aliases: ['recents'] }
      ],
      args: [
        { name: "(track count)", examples: ['100 (default is 10)'] },
        { name: "(last.fm user)" }
      ],
      desc: "Shows a list of recent tracks you or a provided user has listened to. <span class=\"has-text-grey-light\">(track count defaults to 10)</span>",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "toptracks", aliases: ['tt'] }
      ],
      args: [
        { name: "(time period)", examples: ['week/7day', 'month/30day', '3month/90day', '<br>6month/180day', 'year/365day', 'alltime/at/overall'] },
        { name: "(track count)", examples: ['100 (default is 10)'] }
      ],
      desc: "Shows your most listened to tracks for a given time period. <span class=\"has-text-grey-light\">(track count defaults to 10)</span>",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "topalbums", aliases: ['talb', 'tal', 'tab'] }
      ],
      args: [
        { name: "(time period)", examples: ['week/7day', 'month/30day', '3month/90day', '<br>6month/180day', 'year/365day', 'alltime/at/overall'] },
        { name: "(album count)", examples: ['100 (default is 10)'] }
      ],
      desc: "Shows your most listened to albums for a given time period. <span class=\"has-text-grey-light\">(album count defaults to 10)</span>",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "topartists", aliases: ['ta'] }
      ],
      args: [
        { name: "(time period)", examples: ['week/7day', 'month/30day', '3month/90day', '<br>6month/180day', 'year/365day', 'alltime/at/overall'] },
        { name: "(artist count)", examples: ['100 (default is 10)'] }
      ],
      desc: "Shows your most listened to artists for a given time period. <span class=\"has-text-grey-light\">(artist count defaults to 10)</span>",
    },
    {
      cmds: [
        { name: "chart", aliases: ['fm', 'lf'] }
      ],
      args: [
        { name: "(grid size)", examples: ['3x3', '5x5', '10x10'] },
        { name: "(time period)", examples: ['week/7day', 'month/30day', '3month/90day', '<br>6month/180day', 'year/365day', 'alltime/at/overall'] }
      ],
      desc: "Shows an image collage of your most listened to albums and their names during the given time. <span class=\"has-text-grey-light\">(defaults to 7 days)</span>",
    },
    {
      cmds: [
        { name: "chart", aliases: ['fm', 'lf'] },
        { name: "artists" }
      ],
      args: [
        { name: "(grid size)", examples: ['3x3', '5x5', '10x10'] },
        { name: "(time period)", examples: ['week/7day', 'month/30day', '3month/90day', '<br>6month/180day', 'year/365day', 'alltime/at/overall'] }
      ],
      desc: "Shows an image collage of your most listened to artists and their names during the given time. <span class=\"has-text-grey-light\">(defaults to 7 days)</span>",
    },
    {
      cmds: [
        { name: "lastfm", aliases: ['fm', 'lf'] },
        { name: "profile" }
      ],
      args: [
        { name: "(last.fm user)" }
      ],
      desc: "Shows stats from your profile or a provided user's profile.",
    },
  ],
  "YouTube": [
    {
      cmds: [
        { name: "youtube", aliases: ['yt'] },
      ],
      args: [
        { name: "[query]" }
      ],
      desc: "Searches YouTube for your query and returns the first 20 results.",
    },
  ],
  "Instagram - Disabled due to Instagram changes": [
    {
      cmds: [
        { name: "instagram", aliases: ['insta'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "add" },
        { name: "<b>(DISABLED)</b>" }////
      ],
      args: [
        { name: "[instagram account]", examples: ["loonatheworld", "<a>https://www.instagram.com/loonatheworld/</a>"] },
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#instagram-feed</span>", '482750802377703426'] },
        { name: "(mention role)", examples: ["Twitter", "notification"] }
      ],
      desc: "Adds an Instagram account to be notified for new posts from in the provided channel. If a mention role is provided, that role will be mentioned for notifications too. Note that the number of Instagram accounts you can add notifications for is limited by your server's member count in the following manner: <ul style=\"margin-top:0.5em;\"><li><code class=\"has-text-primary\">100 members</code> - 1 Instagram account.</li><li><code class=\"has-text-primary\">500 members</code> - 2 Instagram accounts.</li><li><code class=\"has-text-primary\">1,000 members</code> - 3 Instagram accounts.</li></ul>",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "instagram", aliases: ['insta'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "remove", aliases: ['delete'] },
        { name: "<b>(DISABLED)</b>" }////
      ],
      args: [
        { name: "[instagram account]", examples: ["loonatheworld", "<a>https://www.instagram.com/loonatheworld/</a>"] },
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#instagram-feed</span>", '482750802377703426'] }
      ],
      desc: "Removes an Instagram account feed from the given channel.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "instagram", aliases: ['insta'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "list" }
      ],
      desc: "Shows a list of all the Instagram feeds you have set up in the server.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    // {
    //   cmds: [
    //     { name: "instagram", aliases: ['insta'] },
    //     { name: "toggle"},
    //     { name: "stories", aliases: ['story'] }
    //   ],
    //   args: [
    //     { name: "[instagram account]", examples: ["loonatheworld", "<a>https://www.instagram.com/loonatheworld/</a>"]},
    //     { name: "[channel]", examples: ["<span class=\"discord-tag\" >#instagram-feed</span>", '482750802377703426'] }
    //   ],
    //   desc: "Toggles notifications from Instagram stories. <span class=\"has-text-grey-light\">(on by default)</span>",
    //   perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    // }
  ],
  "Twitter": [
    {
      cmds: [
        { name: "twitter", aliases: ['twt'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "add" }
      ],
      args: [
        { name: "[twitter account]", examples: ["loonatheworld", "<a>https://twitter.com/loonatheworld/</a>"] },
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#twitter-feed</span>", '482750802377703426'] },
        { name: "(mention role)", examples: ["Twitter", "notification"] }
      ],
      desc: "Adds a Twitter account to be notified for new tweets/retweets from in the provided channel. If a mention role is provided, that role will be mentioned for notifications. Note that you can have notifications for up to 3 Twitter accounts per server.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "twitter", aliases: ['twt'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "remove", aliases: ['delete'] }
      ],
      args: [
        { name: "[twitter account]", examples: ["loonatheworld", "<a>https://twitter.com/loonatheworld/</a>"] },
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#twitter-feed</span>", '482750802377703426'] }
      ],
      desc: "Removes a Twitter account notification from the given channel.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "twitter", aliases: ['twt'] },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "list" }
      ],
      desc: "Shows a list of all the Twitter notifications you have in the server.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "twitter", aliases: ['twt'] },
        { name: "toggle" },
        { name: "retweets", aliases: ['rts'] }
      ],
      args: [
        { name: "[twitter account]", examples: ["loonatheworld", "<a>https://twitter.com/loonatheworld/</a>"] },
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#twitter-feed</span>", '482750802377703426'] }
      ],
      desc: "Toggles notifications from retweets. <span class=\"has-text-grey-light\">(on by default)</span>",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    }
  ],
  "VLIVE - Currently Disabled until Haseul Bot 2.0": [
    {
      cmds: [
        { name: "vlive" },
        { name: "channel", aliases: ['channelinfosudi'] },
        { name: "<b>(CURRENTLY DISABLED)</b>" }////
      ],
      args: [
        { name: "[vlive channel]", examples: ["LOONA", "<a>https://channels.vlive.tv/E1F3A7/home</a>"] }
      ],
      desc: "Shows information about a VLIVE channel."
    },
    {
      cmds: [
        { name: "vlive" },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "add" },
        { name: "<b>(CURRENTLY DISABLED)</b>" }////
      ],
      args: [
        { name: "[vlive channel]", examples: ["LOONA", "<a>https://channels.vlive.tv/E1F3A7/home</a>"] },
        { name: "[discord channel]", examples: ["<span class=\"discord-tag\" >#vlive-feed</span>", '482750802377703426'] },
        { name: "(mention role)", examples: ["VLIVE", "notification"] }
      ],
      desc: "Adds a VLIVE channel to be notified for new lives/uploads from in the provided channel. If a mention role is provided, that role will be mentioned for notifications.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "vlive" },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "remove", aliases: ['delete'] },
        { name: "<b>(CURRENTLY DISABLED)</b>" }////
      ],
      args: [
        { name: "[vlive channel]", examples: ["LOONA", "<a>https://channels.vlive.tv/E1F3A7/home</a>"] },
        { name: "[discord channel]", examples: ["<span class=\"discord-tag\" >#vlive-feed</span>", '482750802377703426'] }
      ],
      desc: "Removes a VLIVE channel notification from the given channel.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "vlive" },
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "list" },
        { name: "<b>(CURRENTLY DISABLED)</b>" }////
      ],
      desc: "Shows a list of all the VLIVE notifications you have in the server.",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    },
    {
      cmds: [
        { name: "vlive" },
        { name: "toggle" },
        { name: "vpick" },
        { name: "<b>(CURRENTLY DISABLED)</b>" }////
      ],
      args: [
        { name: "[vlive channel]", examples: ["LOONA", "<a>https://channels.vlive.tv/E1F3A7/home</a>"] },
        { name: "[discord channel]", examples: ["<span class=\"discord-tag\" >#vlive-feed</span>", '482750802377703426'] }
      ],
      desc: "Toggles notifications from VPICK. <span class=\"has-text-grey-light\">(on by default)</span>",
      perms: ["MANAGE_GUILD", "MANAGE_CHANNELS"]
    }
  ],
  "Notifications": [
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "add" }
      ],
      args: [
        { name: "(type)", examples: ["STRICT", "NORMAL", "LENIENT"] },
        { name: "[keyword]", examples: ["haseul"] }
      ],
      desc: "Adds a keyword to be notified of when mentioned by a user in the server.<ul style=\"margin-top:0.5em;\"><li><code class=\"has-text-primary\">STRICT</code> - will only notify you for whole words, case sensitive, no plurals.</li><li><code class=\"has-text-primary\">NORMAL</code> - will only notify you for whole words, case insensitive, includes plurals. <span class=\"has-text-grey-light\">(default)</span></li><li><code class=\"has-text-primary\">LENIENT</code> - case insensitive, includes plurals, letter-number replacements.</li><li><code class=\"has-text-primary\">ANARCHY</code> - repeating characters, non-letters between characters and letter-number swaps <span class=\"has-text-grey-light\">(e.g. $. c 0 t7 0 = scotto)</span></li></ul>",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "remove", aliases: ['delete'] }
      ],
      args: [
        { name: "[keyword]", examples: ["haseul"] }
      ],
      desc: "Removes a keyword you were notified of in the server.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "list" }
      ],
      desc: "DMs you a list of keywords for the server.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "clear", aliases: ['purge'] }
      ],
      desc: "Clears all keywords you are notified of in the server.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "global" },
        { name: "add" }
      ],
      args: [
        { name: "(type)", examples: ["STRICT", "NORMAL", "LENIENT"] },
        { name: "[keyword]", examples: ["haseul"] }
      ],
      desc: "Adds a keyword to be notified of when mentioned by a user in any server that you and Haseul Bot are both in.<ul style=\"margin-top:0.5em;\"><li><code class=\"has-text-primary\">STRICT</code> - will only notify you for whole words, case sensitive, no plurals.</li><li><code class=\"has-text-primary\">NORMAL</code> - will only notify you for whole words, case insensitive, includes plurals. <span class=\"has-text-grey-light\">(default)</span></li><li><code class=\"has-text-primary\">LENIENT</code> - case insensitive, includes plurals, letter-number replacements.</li><li><code class=\"has-text-primary\">ANARCHY</code> - repeating characters, non-letters between characters and letter-number swaps <span class=\"has-text-grey-light\">(e.g. $. c 0 t7 0 = scotto)</span></li></ul>",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "global" },
        { name: "remove", aliases: ['delete'] }
      ],
      args: [
        { name: "[keyword]", examples: ["haseul"] }
      ],
      desc: "Removes a keyword you were notified of in servers you and Haseul Bot are both in.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "global" },
        { name: "list" }
      ],
      desc: "DMs you a list of keywords you are notified of in servers you and Haseul Bot are both in.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "global" },
        { name: "clear", aliases: ['purge'] }
      ],
      desc: "Clears all keywords you are notified of in servers you and Haseul Bot are both in.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "ignore", aliases: ['blacklist'] },
        { name: "channel", aliases: ['purge'] }
      ],
      args: [
        { name: "(channel)", examples: ["<span class=\"discord-tag\" >#general-chat</span>", '482759670637789205'] }
      ],
      desc: "Toggles notifications for keywords in the provided channel or the channel the command is sent in.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "ignore", aliases: ['blacklist'] },
        { name: "server", aliases: ['purge'] }
      ],
      desc: "Toggles notifications for keywords in the server.",
    },
    {
      cmds: [
        { name: "notification", aliases: ['notif', 'noti'] },
        { name: "dnd", aliases: ['donotdisturb'] },
      ],
      desc: "Toggles \"do not disturb\" mode.",
    },
  ],
  "Custom Commands": [
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "add" }
      ],
      args: [
        { name: "[command name]", examples: ["dablivia"] },
        { name: "[content]", examples: ['*dabs*', '<a>https://gfycat.com/HomelyHospitableAmericanavocet</a>'] }
      ],
      desc: "Adds a custom command under the given command name, to respond with the provided content when used.",
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "remove", aliases: ['delete'] }
      ],
      args: [
        { name: "[command name]", examples: ["chuuhug"] }
      ],
      desc: "Removes a command under the given command name."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "rename" }
      ],
      args: [
        { name: "[command name]", examples: ["chuuhug"] },
        { name: "[new name]", examples: ["chuuhugging"] }
      ],
      desc: "Renames a command under the given command name to the given new name."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "edit" }
      ],
      args: [
        { name: "[command name]", examples: ["chuuhug"] },
        { name: "[new content]", examples: ["<a>https://gfycat.com/AgitatedUnfoldedDarklingbeetle</a>"] }
      ],
      desc: "Edits a command under the given command name's content."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "list" }
      ],
      desc: "Shows a list of all the commands in the server."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "list" },
        { name: "raw" }
      ],
      desc: "Sends a JSON file with all the commands in the server."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "search" }
      ],
      args: [
        { name: "[command query]", examples: ["haseul"] },
      ],
      desc: "Shows a list of commands matching the given command query."
    },
    {
      cmds: [
        { name: "command", aliases: ['commands', 'cmd'] },
        { name: "toggle" }
      ],
      desc: "Toggles the ability to use custom commands on and off. <span class=\"has-text-grey-light\">(on by default)</span>"
    }
  ],
  "Emoji": [
    {
      cmds: [
        { name: "emoji", aliases: ['<span class=\"discord-tag\" >@Haseul Bot</span>'] },
      ],
      args: [
        { name: "[emoji]", examples: [":haseullaugh:", ':vivismirk:'] }
      ],
      desc: "Shows a custom emoji in full size, and its file size."
    },
    {
      cmds: [
        { name: "emoji" },
        { name: "list" }
      ],
      desc: "Lists all the custom emojis in the server."
    },
    {
      cmds: [
        { name: "emoji" },
        { name: "search" }
      ],
      args: [
        { name: "[query]", examples: [":haseullaugh:", ':vivismirk:'] }
      ],
      desc: "Lists all the custom emojis matching your query."
    },
  ],
  "Roles": [
    {
      cmds: [
        { name: "roles" },
        { name: "list" },
      ],
      desc: "Shows a list of all the roles on the server, their member counts and their hex colour codes."
    },
    {
      cmds: [
        { name: "bias" },
        { name: "list" },
      ],
      desc: "Shows a list of all main and sub bias roles on the server and their member counts."
    },
    {
      cmds: [
        { name: "roles" },
        { name: "add" },
      ],
      args: [
        { name: "[type]", examples: ["MAIN", "SUB", "OTHER"] },
        { name: "[role command:name pairs...]", examples: ["olivia: 🐺 Olivia Hye, olivia hye: 🐺 Olivia Hye, hye: 🐺 Olivia Hye", "heejin: 🐰 Heejin, heekkie: 🐰 Heejin"] }
      ],
      desc: "Pairs commands with roles under a given type based on role names so that when a command is used in the role picker channel it will assign the corresponding role to the user. To pair multiple commands at once, comma separate the pairs as shown in the example.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "remove", aliases: ['delete'] },
      ],
      args: [
        { name: "[type]", examples: ["MAIN", "SUB", "OTHER"] },
        { name: "[role commands...]", examples: ["olivia, olivia hye, hye", "heejin, heekkie"] }
      ],
      desc: "Removes role command pairs under a given type based on commands names.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "message", aliases: ['msg'] },
        { name: "set" }
      ],
      args: [
        { name: "[message]", examples: ["__**Roles Assignment**__<br>To add a role, type +\<type\> \<role names\><br>to remove a role, type -\<type\> \<role names\><br>Types can be one of MAIN, SUB or OTHER.<br>For example, +main heejin, hyunjin, haseul"] },
      ],
      desc: "Sets the message to be displayed in the role picker channel.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "channel" },
        { name: "set" }
      ],
      args: [
        { name: "[channel]", examples: ["<span class=\"discord-tag\" >#bias-picker</span>", '482596755326763012'] },
      ],
      desc: "Sets the role picker channel.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "toggle" }
      ],
      desc: "Toggles the role picker. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "channel" },
        { name: "update" }
      ],
      desc: "Updates the roles channel to the current roles message and available roles.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "roles" },
        { name: "pairs" },
        { name: "list" }
      ],
      desc: "Lists the role commands currently paired in the server.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "avarole" },
      ],
      args: [
        { name: "[type]", examples: ["MAIN", "SUB", "OTHER"] },
        { name: "[commands...]", examples: ["Heejin, Hyunjin, Haseul, Yeojin, Vivi, Kim Lip, Jinsoul, Choerry, Yves, Chuu, Go Won, Olivia Hye"] }
      ],
      desc: "Toggles commands to be shown under a type along with the roles message under Available Roles.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "autorole" },
        { name: "set" }
      ],
      args: [
        { name: "[role]", examples: ["New"] },
      ],
      desc: "Sets the role to be automatically be given to new users.",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
    {
      cmds: [
        { name: "autorole" },
        { name: "toggle" }
      ],
      desc: "Toggles roles being automatically be given to new users. <span class=\"has-text-grey-light\">(off by default)</span>",
      perms: ["MANAGE_GUILD", "MANAGE_ROLES"]
    },
  ],
  "Misc": [
    // {
    //   name: "color",
    //   usage: "[hex code|random]",
    //   desc: "Returns an image of the color provided or a random color.",
    // },
    {
      cmds: [
        { name: "translate", aliases: ['tr'] },
      ],
      args: [
        { name: "[source-target]", examples: ['en-ko', 'ko-ja', 'fr-es', 'en', 'ja'] },
        { name: "[text]", examples: ["I'm hungry"] },
      ],
      desc: "Translates text from a given source language to the target language, or if no source language is provided, the language is auto detected. You can find language codes <a href=\"./languages/\">here</a>."
    },
    {
      cmds: [
        { name: "colour", aliases: ['color'] },
      ],
      args: [
        { name: "[colour]", examples: ['#ff0000', '#03a750', '255 0 0', '34, 243, 51', 'random'] },
      ],
      desc: "Displays a colour. Can display based on hexadecimal codes, rgb values or can be supplied with \"random\" to return a randomly generated colour."
    }
  ],
}

/**
 * Creates a HTML node element with given type,
 * text, and class.
 * 
 * @param {object} settings Element settings
 */
function createElement(settings) {
  const baseElem = document.createElement(settings.element);
  if (settings.text) {
    let text = settings.text;
    if (settings.space) {
      text = settings.text + " ";
    }

    baseElem.innerHTML = text;
  }

  if (settings.className) {
    baseElem.className = settings.className;
  }

  if (settings.id) {
    baseElem.id = settings.id;
  }

  if (settings.href) {
    baseElem.href = settings.href;
  }

  if (settings.style) {
    baseElem.style = settings.style;
  }

  return baseElem;
}

document.addEventListener('DOMContentLoaded', function () {

  const commandSection = document.getElementById("command-content");

  for (let category in COMMANDS) {
    if (!COMMANDS.hasOwnProperty(category)) {
      continue;
    }
    const cmdDropdown = document.getElementById("commands-dropdown")
    const commandHref = category.toLowerCase().replace(/\s+/, '-');

    cmdDropdown.appendChild(createElement({
      element: "a",
      text: category,
      className: "navbar-item",
      href: '#' + commandHref
    }));

    const cardElem = document.createElement("div");
    cardElem.className = "card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    const cardHeaderTitle = document.createElement("h3");
    cardHeaderTitle.className = "card-header-title";

    const cardHeaderAnchor = document.createElement("span");
    cardHeaderAnchor.id = commandHref;
    cardHeaderAnchor.className = "anchor-target"

    cardHeaderTitle.appendChild(createElement({
      element: "a",
      text: category,
      href: '#' + cardHeaderAnchor.id,
      className: "header-link"
    }))

    cardHeader.appendChild(cardHeaderTitle);
    cardHeader.appendChild(cardHeaderAnchor);
    cardElem.appendChild(cardHeader);

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    for (let index in COMMANDS[category]) {
      const command = COMMANDS[category][index];

      if (command.cmds) {
        for (let i = 0; i < command.cmds.length; i++) {
          let { name, aliases } = command.cmds[i];
          let cmdElem = createElement({
            element: "code",
            text: `${i == 0 ? PREFIX : ''}${name}`,
            space: i < command.cmds.length - 1 || command.args,
            className: "has-text-danger"
          })

          if (aliases) {
            cmdElem.classList.add("tooltip");
            let toolElem = document.createElement("span");
            toolElem.className = "tooltip-span";

            let tooltip = document.createElement("div");
            tooltip.className = "card tooltip-card";

            tooltip.appendChild(createElement({
              element: "span",
              text: (i == 0 ? aliases.map(x => !x.startsWith('<span class=\"discord-tag\"') ? PREFIX + x : x) : aliases).join(', '),
              className: "has-text-light"
            }))
            toolElem.appendChild(tooltip);
            cmdElem.appendChild(toolElem);
          }
          cardContent.appendChild(cmdElem);
        }
      }

      if (command.args) {
        for (let i = 0; i < command.args.length; i++) {
          let { name, examples } = command.args[i];
          let argElem = createElement({
            element: "code",
            text: name,
            space: i < command.args.length - 1,
            className: "has-text-info"
          })

          if (examples) {
            argElem.classList.add("tooltip");
            let toolElem = document.createElement("span");
            toolElem.className = "tooltip-span";

            let tooltip = document.createElement("div");
            tooltip.className = "card tooltip-card";

            tooltip.appendChild(createElement({
              element: "span",
              text: examples.join(', '),
              className: "has-text-light"
            }))
            toolElem.appendChild(tooltip);
            argElem.appendChild(toolElem);
          }
          cardContent.appendChild(argElem);
        }
      }

      if (command.perms) {
        for (let perm of command.perms) {
          cardContent.appendChild(createElement({
            element: "span",
            text: " ",
            space: false,
          }));
          cardContent.appendChild(createElement({
            element: "span",
            text: perm,
            space: true,
            className: "button is-dark is-small perm-button"
          }));
        }
      }

      cardContent.appendChild(createElement({
        element: "br",
      }));

      cardContent.appendChild(createElement({
        element: "p",
        text: "└ " + command.desc
      }));
    }

    cardElem.appendChild(cardContent);
    commandSection.appendChild(cardElem);

  }
});