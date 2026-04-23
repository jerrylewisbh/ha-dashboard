// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes } from '@hakit/core';
declare module '@hakit/core' {
  export interface CustomSupportedServices<T extends ServiceFunctionTypes = 'target'> {
    homeassistant: {
      // undefined
      savePersistentStates: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      stop: ServiceFunction<object, T, object>;
      // undefined
      restart: ServiceFunction<object, T, object>;
      // undefined
      checkConfig: ServiceFunction<object, T, object>;
      // undefined
      updateEntity: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
        }
      >;
      // undefined
      reloadCoreConfig: ServiceFunction<object, T, object>;
      // undefined
      setLocation: ServiceFunction<
        object,
        T,
        {
          //  @example 32.87336 @constraints  number: mode: box, min: -90, max: 90, step: any
          latitude: number;
          //  @example 117.22743 @constraints  number: mode: box, min: -180, max: 180, step: any
          longitude: number;
          //  @example 120 @constraints  number: mode: box, step: any
          elevation?: number;
        }
      >;
      // undefined
      reloadCustomTemplates: ServiceFunction<object, T, object>;
      // undefined
      reloadConfigEntry: ServiceFunction<
        object,
        T,
        {
          //  @example 8955375327824e14ba89e4b29cc3ec9a @constraints  config_entry:
          entry_id?: unknown;
        }
      >;
      // undefined
      reloadAll: ServiceFunction<object, T, object>;
    };
    persistentNotification: {
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example Please check your configuration.yaml.
          message: string;
          //  @example Test notification
          title?: string;
          //  @example 1234
          notification_id?: string;
        }
      >;
      // undefined
      dismiss: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          notification_id: string;
        }
      >;
      // undefined
      dismissAll: ServiceFunction<object, T, object>;
    };
    systemLog: {
      // undefined
      clear: ServiceFunction<object, T, object>;
      // undefined
      write: ServiceFunction<
        object,
        T,
        {
          //  @example Something went wrong
          message: string;
          //
          level?: 'debug' | 'info' | 'warning' | 'error' | 'critical';
          //  @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // undefined
      setDefaultLevel: ServiceFunction<
        object,
        T,
        {
          //
          level?: 'debug' | 'info' | 'warning' | 'error' | 'fatal' | 'critical';
        }
      >;
      // undefined
      setLevel: ServiceFunction<object, T, object>;
    };
    frontend: {
      // undefined
      setTheme: ServiceFunction<
        object,
        T,
        {
          //  @example default
          name?: string;
          //  @example default
          name_dark?: string;
        }
      >;
      // undefined
      reloadThemes: ServiceFunction<object, T, object>;
    };
    recorder: {
      // undefined
      purge: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
          //  @constraints  boolean:
          repack?: boolean;
          //  @constraints  boolean:
          apply_filter?: boolean;
        }
      >;
      // undefined
      purgeEntities: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
          //  @example sun @constraints  object: multiple: false
          domains?: object;
          //  @example domain*.object_id* @constraints  object: multiple: false
          entity_globs?: object;
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
        }
      >;
      // undefined
      enable: ServiceFunction<object, T, object>;
      // undefined
      disable: ServiceFunction<object, T, object>;
      // undefined
      getStatistics: ServiceFunction<
        object,
        T,
        {
          //  @example 2025-01-01 00:00:00 @constraints  datetime:
          start_time: string;
          //  @example 2025-01-02 00:00:00 @constraints  datetime:
          end_time?: string;
          //  @example sensor.energy_consumption,sensor.temperature @constraints  statistic: multiple: true
          statistic_ids: unknown;
          //  @example hour
          period: '5minute' | 'hour' | 'day' | 'week' | 'month';
          //  @example mean,sum
          types: 'change' | 'last_reset' | 'max' | 'mean' | 'min' | 'state' | 'sum';
          //  @example [object Object] @constraints  object: multiple: false
          units?: object;
        }
      >;
    };
    hassio: {
      // undefined
      addonStart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStop: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonRestart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStdin: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      appStart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appStop: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appRestart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appStdin: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
          //  @constraints  object: multiple: false
          input: object;
        }
      >;
      // undefined
      hostShutdown: ServiceFunction<object, T, object>;
      // undefined
      hostReboot: ServiceFunction<object, T, object>;
      // undefined
      backupFull: ServiceFunction<
        object,
        T,
        {
          //  @example Backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
        }
      >;
      // undefined
      backupPartial: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          apps?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example Partial backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
        }
      >;
      // undefined
      restoreFull: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @example password
          password?: string;
        }
      >;
      // undefined
      restorePartial: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          apps?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example password
          password?: string;
        }
      >;
    };
    ffmpeg: {
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      stop: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      restart: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
    };
    switch: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    update: {
      // undefined
      install: ServiceFunction<
        object,
        T,
        {
          //  @example 1.0.0
          version?: string;
          //  @constraints  boolean:
          backup?: boolean;
        }
      >;
      // undefined
      skip: ServiceFunction<object, T, object>;
      // undefined
      clearSkipped: ServiceFunction<object, T, object>;
    };
    tts: {
      // undefined
      speak: ServiceFunction<
        object,
        T,
        {
          //
          media_player_entity_id: string;
          //  @example My name is hanna
          message: string;
          //  @constraints  boolean:
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific @constraints  object: multiple: false
          options?: object;
        }
      >;
      // undefined
      clearCache: ServiceFunction<object, T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example My name is hanna
          message: string;
          //
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific
          options?: object;
        }
      >;
    };
    conversation: {
      // undefined
      process: ServiceFunction<
        object,
        T,
        {
          //  @example Turn all lights on
          text: string;
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
          //  @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // undefined
      reload: ServiceFunction<
        object,
        T,
        {
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
        }
      >;
    };
    backup: {
      // undefined
      createAutomatic: ServiceFunction<object, T, object>;
    };
    historyStats: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    cloud: {
      // undefined
      remoteConnect: ServiceFunction<object, T, object>;
      // undefined
      remoteDisconnect: ServiceFunction<object, T, object>;
    };
    scene: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      apply: ServiceFunction<
        object,
        T,
        {
          //  @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80  @constraints  object: multiple: false
          entities: object;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example all_lights
          scene_id: string;
          //  @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200  @constraints  object: multiple: false
          entities?: object;
          //  @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // undefined
      delete: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
    };
    camera: {
      // undefined
      enableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      disableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // undefined
      playStream: ServiceFunction<
        object,
        T,
        {
          //
          media_player: string;
          //
          format?: 'hls';
        }
      >;
      // undefined
      record: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          //  @constraints  number: min: 1, max: 3600, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          lookback?: number;
        }
      >;
    };
    logbook: {
      // undefined
      log: ServiceFunction<
        object,
        T,
        {
          //  @example Kitchen
          name: string;
          //  @example is being used
          message: string;
          //
          entity_id?: string;
          //  @example light
          domain?: string;
        }
      >;
    };
    script: {
      //
      1752556674714: ServiceFunction<object, T, object>;
      //
      washerReminderPopup: ServiceFunction<object, T, object>;
      //
      1753140070392: ServiceFunction<object, T, object>;
      //
      triggerFeeder: ServiceFunction<object, T, object>;
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    inputButton: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      press: ServiceFunction<object, T, object>;
    };
    zone: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    inputBoolean: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    timer: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00 or 60 @constraints  duration:
          duration?: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      cancel: ServiceFunction<object, T, object>;
      // undefined
      finish: ServiceFunction<object, T, object>;
      // undefined
      change: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00, 60 or -60 @constraints  duration: allow_negative: true
          duration: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
    };
    inputSelect: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      setOptions: ServiceFunction<
        object,
        T,
        {
          //  @example ['Item A', 'Item B', 'Item C']
          options: string;
        }
      >;
    };
    inputNumber: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.001, mode: box
          value: number;
        }
      >;
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
    };
    person: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    deviceTracker: {
      // undefined
      see: ServiceFunction<
        object,
        T,
        {
          //  @example FF:FF:FF:FF:FF:FF
          mac?: string;
          //  @example phonedave
          dev_id?: string;
          //  @example Dave
          host_name?: string;
          //  @example home
          location_name?: string;
          //  @example [51.509802, -0.086692] @constraints  object: multiple: false
          gps?: object;
          //  @constraints  number: min: 0, mode: box, unit_of_measurement: m, step: 1
          gps_accuracy?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          battery?: number;
        }
      >;
    };
    androidtv: {
      // undefined
      adbCommand: ServiceFunction<
        object,
        T,
        {
          //  @example HOME
          command: string;
        }
      >;
      // undefined
      learnSendevent: ServiceFunction<object, T, object>;
      // undefined
      download: ServiceFunction<
        object,
        T,
        {
          //  @example /storage/emulated/0/Download/example.txt
          device_path: string;
          //  @example /config/www/example.txt
          local_path: string;
        }
      >;
      // undefined
      upload: ServiceFunction<
        object,
        T,
        {
          //  @example /storage/emulated/0/Download/example.txt
          device_path: string;
          //  @example /config/www/example.txt
          local_path: string;
        }
      >;
    };
    musicAssistant: {
      // undefined
      search: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: music_assistant
          config_entry_id: unknown;
          //  @example We Are The Champions
          name: string;
          //  @example playlist
          media_type?: 'artist' | 'album' | 'audiobook' | 'playlist' | 'podcast' | 'track' | 'radio';
          //  @example Queen
          artist?: string;
          //  @example News of the world
          album?: string;
          //  @example 25 @constraints  number: min: 1, max: 100, step: 1, mode: slider
          limit?: number;
          //  @example true @constraints  boolean:
          library_only?: boolean;
        }
      >;
      // undefined
      getLibrary: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: music_assistant
          config_entry_id: unknown;
          //  @example playlist
          media_type: 'artist' | 'album' | 'audiobook' | 'playlist' | 'podcast' | 'track' | 'radio';
          //  @example true @constraints  boolean:
          favorite?: boolean;
          //  @example We Are The Champions
          search?: string;
          //  @example 25 @constraints  number: min: 1, max: 500, step: 1, mode: slider
          limit?: number;
          //  @example 25 @constraints  number: min: 1, max: 1000000, step: 1, mode: slider
          offset?: number;
          //  @example random
          order_by?:
            | 'name'
            | 'name_desc'
            | 'sort_name'
            | 'sort_name_desc'
            | 'timestamp_added'
            | 'timestamp_added_desc'
            | 'last_played'
            | 'last_played_desc'
            | 'play_count'
            | 'play_count_desc'
            | 'year'
            | 'year_desc'
            | 'position'
            | 'position_desc'
            | 'artist_name'
            | 'artist_name_desc'
            | 'random'
            | 'random_play_count';
          //  @example single
          album_type?: 'album' | 'single' | 'compilation' | 'ep' | 'unknown';
          //  @example true @constraints  boolean:
          album_artists_only?: boolean;
        }
      >;
      // undefined
      playMedia: ServiceFunction<
        object,
        T,
        {
          //  @example spotify://playlist/aabbccddeeff @constraints  object: multiple: false
          media_id: object;
          //  @example playlist
          media_type?: 'artist' | 'album' | 'audiobook' | 'folder' | 'playlist' | 'podcast' | 'track' | 'radio';
          //  @example Queen
          artist?: string;
          //  @example News of the world
          album?: string;
          //
          enqueue?: 'play' | 'replace' | 'next' | 'replace_next' | 'add';
          //  @constraints  boolean:
          radio_mode?: boolean;
        }
      >;
      // undefined
      playAnnouncement: ServiceFunction<
        object,
        T,
        {
          //  @example http://someremotesite.com/doorbell.mp3
          url: string;
          //  @example true @constraints  boolean:
          use_pre_announce?: boolean;
          //  @example http://someremotesite.com/chime.mp3
          pre_announce_url?: string;
          //  @example 75 @constraints  number: min: 1, max: 100, step: 1, mode: slider
          announce_volume?: number;
        }
      >;
      // undefined
      transferQueue: ServiceFunction<
        object,
        T,
        {
          //
          source_player?: string;
          //  @example true @constraints  boolean:
          auto_play?: boolean;
        }
      >;
      // undefined
      getQueue: ServiceFunction<object, T, object>;
    };
    googleGenerativeAiConversation: {
      // undefined
      generateContent: ServiceFunction<
        object,
        T,
        {
          //
          prompt: string;
          //
          filenames?: string;
        }
      >;
    };
    shoppingList: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      incompleteItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeAll: ServiceFunction<object, T, object>;
      // undefined
      incompleteAll: ServiceFunction<object, T, object>;
      // undefined
      clearCompletedItems: ServiceFunction<object, T, object>;
      // undefined
      sort: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          reverse?: boolean;
        }
      >;
    };
    dwainsDashboard: {
      // Show a notification in the frontend.
      notificationCreate: ServiceFunction<
        object,
        T,
        {
          // Message body of the notification. [Templates accepted] @example Dishwasher is done! :D
          message?: object;
          // Target ID of the notification, will replace a notification with the same Id. [Optional] @example 1234
          notification_id?: object;
        }
      >;
      // Remove a notification from the frontend.
      notificationDismiss: ServiceFunction<
        object,
        T,
        {
          // Target ID of the notification, which should be removed. [Required] @example 1234
          notification_id?: object;
        }
      >;
      // Mark a notification read.
      notificationMarkRead: ServiceFunction<
        object,
        T,
        {
          // Target ID of the notification, which should be mark read. [Required] @example 1234
          notification_id?: object;
        }
      >;
      // Reload dashboard configuration from Dwains dashboard
      reload: ServiceFunction<object, T, object>;
    };
    light: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //  @constraints  number: min: -100, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_step_pct?: number;
          //
          effect?: string;
          //  @example [255, 100, 100, 50] @constraints  object: multiple: false
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70] @constraints  object: multiple: false
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          //  @example [300, 70] @constraints  object: multiple: false
          hs_color?: [number, number];
          //  @example [0.52, 0.43] @constraints  object: multiple: false
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          brightness?: number;
          //  @constraints  number: min: -225, max: 255, step: 1, mode: slider
          brightness_step?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: 'long' | 'short';
        }
      >;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //
          flash?: 'long' | 'short';
        }
      >;
      // undefined
      toggle: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //
          effect?: string;
          //  @example [255, 100, 100, 50] @constraints  object: multiple: false
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70] @constraints  object: multiple: false
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          //  @example [300, 70] @constraints  object: multiple: false
          hs_color?: [number, number];
          //  @example [0.52, 0.43] @constraints  object: multiple: false
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          brightness?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: 'long' | 'short';
        }
      >;
    };
    mediaPlayer: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      volumeUp: ServiceFunction<object, T, object>;
      // undefined
      volumeDown: ServiceFunction<object, T, object>;
      // undefined
      mediaPlayPause: ServiceFunction<object, T, object>;
      // undefined
      mediaPlay: ServiceFunction<object, T, object>;
      // undefined
      mediaPause: ServiceFunction<object, T, object>;
      // undefined
      mediaStop: ServiceFunction<object, T, object>;
      // undefined
      mediaNextTrack: ServiceFunction<object, T, object>;
      // undefined
      mediaPreviousTrack: ServiceFunction<object, T, object>;
      // undefined
      clearPlaylist: ServiceFunction<object, T, object>;
      // undefined
      volumeSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 1, step: 0.01, mode: slider
          volume_level: number;
        }
      >;
      // undefined
      volumeMute: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          is_volume_muted: boolean;
        }
      >;
      // undefined
      mediaSeek: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.01, mode: box
          seek_position: number;
        }
      >;
      // undefined
      join: ServiceFunction<
        object,
        T,
        {
          //  @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // undefined
      selectSource: ServiceFunction<
        object,
        T,
        {
          //  @example video1
          source: string;
        }
      >;
      // undefined
      selectSoundMode: ServiceFunction<
        object,
        T,
        {
          //  @example Music
          sound_mode?: string;
        }
      >;
      // undefined
      playMedia: ServiceFunction<
        object,
        T,
        {
          //  @example {'media_content_id': 'https://home-assistant.io/images/cast/splash.png', 'media_content_type': 'music'} @constraints  media: multiple: false
          media: unknown;
          //
          enqueue?: 'play' | 'next' | 'add' | 'replace';
          //  @example true @constraints  boolean:
          announce?: boolean;
        }
      >;
      // undefined
      browseMedia: ServiceFunction<
        object,
        T,
        {
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
        }
      >;
      // undefined
      searchMedia: ServiceFunction<
        object,
        T,
        {
          //  @example Beatles
          search_query: string;
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
          //  @example album,artist
          media_filter_classes?: string;
        }
      >;
      // undefined
      shuffleSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          shuffle: boolean;
        }
      >;
      // undefined
      unjoin: ServiceFunction<object, T, object>;
      // undefined
      repeatSet: ServiceFunction<
        object,
        T,
        {
          //
          repeat: 'off' | 'all' | 'one';
        }
      >;
    };
    browserMod: {
      // Run a sequence of services
      sequence: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // List of services to run @constraints  object: multiple: false
          sequence?: object;
        }
      >;
      // Wait for a time
      delay: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Time to wait (ms) @constraints  number: mode: box, step: 1
          time?: number;
        }
      >;
      // Display a popup
      popup: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // ID of the popup-card to use as a template for the popup
          popup_card_id?: string;
          // Popup title
          title?: string;
          // Popup content (Text or lovelace card configuration) @constraints  object: multiple: false
          content: object;
          // Initial style to apply to the popup
          initial_style?: 'normal' | 'classic' | 'wide' | 'fullscreen';
          // Sequence of styles to cycle through when user taps the title or with browser_mod.set_popup_style service
          style_sequence?: 'initial' | 'normal' | 'classic' | 'wide' | 'fullscreen';
          // Popup styles to apply. Use 'all' to always apply the style. You can add to standard styles or create your own @constraints  object: label_field: style, description_field: include_styles, multiple: true, fields: [object Object]
          popup_styles?: object;
          // Text of the right button
          right_button?: string;
          // Variant of the right button
          right_button_variant?: 'brand' | 'neutral' | 'danger' | 'warning' | 'success';
          // Appearance of the right button
          right_button_appearance?: 'accent' | 'filled' | 'outlined' | 'plain';
          // Action to perform when the right button is pressed @constraints  object: multiple: false
          right_button_action?: object;
          // Text of the left button
          left_button?: string;
          // Variant of the left button
          left_button_variant?: 'brand' | 'neutral' | 'danger' | 'warning' | 'success';
          // Appearance of the left button
          left_button_appearance?: 'accent' | 'filled' | 'outlined' | 'plain';
          // Action to perform when left button is pressed @constraints  object: multiple: false
          left_button_action?: object;
          // Whether the popup can be closed by the user without action @constraints  boolean:
          dismissable?: boolean;
          // Action to perform when popup is dismissed @constraints  object: multiple: false
          dismiss_action?: object;
          // Close the popup automatically on mouse, pointer or keyboard activity @constraints  boolean:
          autoclose?: boolean;
          // Time before closing (ms) @constraints  number: mode: box, step: 1
          timeout?: number;
          // Action to perform when popup is closed by timeout @constraints  object: multiple: false
          timeout_action?: object;
          // Hide timeout progress bar @constraints  boolean:
          timeout_hide_progress?: boolean;
          // Tag for managing multiple popups
          tag?: string;
        }
      >;
      // Show more-info dialog
      moreInfo: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          //
          entity?: string;
          // More-info view to show
          view?: 'info' | 'history' | 'settings' | 'related';
          //  @constraints  boolean:
          large?: boolean;
          //  @constraints  boolean:
          ignore_popup_card?: boolean;
          // Close the more-info dialog if open @constraints  boolean:
          close?: boolean;
        }
      >;
      // Close a popup
      closePopup: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Close all Browser Mod popups on the browser @constraints  boolean:
          all?: boolean;
          // Tag for popup to close when using multiple popups
          tag?: string;
        }
      >;
      // Set the style of a popup
      setPopupStyle: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Set style for all open Browser Mod popups on the browser @constraints  boolean:
          all?: boolean;
          // Tag for popup to set style for when using multiple popups
          tag?: string;
          // Style to apply to the popup
          style?: 'normal' | 'classic' | 'wide' | 'fullscreen';
          // Direction to cycle through style sequence
          direction?: 'forward' | 'back';
        }
      >;
      // Display a short notification
      notification: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Message to display
          message: string;
          // Time before closing (ms) @constraints  number: mode: box, step: 1
          duration?: number;
          // Text of optional action button
          action_text?: string;
          // Action to perform when the action button is pressed @constraints  object: multiple: false
          action?: object;
        }
      >;
      // Navigate browser to a different page
      navigate: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Target path
          path?: string;
        }
      >;
      // Refresh page
      refresh: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
        }
      >;
      // Change browser ID
      changeBrowserId: ServiceFunction<
        object,
        T,
        {
          // Current Browser ID of the browser to change
          current_browser_id?: string;
          // New Browser ID for the browser
          new_browser_id?: string;
          // Register the browser @constraints  boolean:
          register?: boolean;
          // Refresh the browser after changing the ID @constraints  boolean:
          refresh?: boolean;
        }
      >;
      // Change the current theme
      setTheme: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Name of theme or 'auto'
          theme?: string;
          // Dark/light mode
          dark?: 'auto' | 'light' | 'dark';
          // Primary theme color @constraints  color_rgb:
          primaryColor?: unknown;
          // Accent theme color @constraints  color_rgb:
          accentColor?: unknown;
        }
      >;
      // Print text to browser console
      console: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // Text to print
          message?: string;
        }
      >;
      // Run arbitrary JavaScript code
      javascript: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          //
          user_id?: string;
          // JavaScript code to run @constraints  object: multiple: false
          code?: object;
        }
      >;
      // Deregister a browser. Include at leaset one paremeter. Calling wiith either exclude parameter will deregister all browsers except those excluded.
      deregisterBrowser: ServiceFunction<
        object,
        T,
        {
          //
          browser_id?: string;
          // Exclude browser from deregister
          browser_id_exclude?: string;
          // Exclude browsers in area from deregister @constraints  area: multiple: true, entity: [object Object]
          area_id_exclude?: unknown;
        }
      >;
    };
    file: {
      // undefined
      readFile: ServiceFunction<
        object,
        T,
        {
          //  @example www/my_file.json
          file_name?: string;
          //  @example JSON
          file_encoding?: 'JSON' | 'YAML';
        }
      >;
    };
    mqtt: {
      // undefined
      publish: ServiceFunction<
        object,
        T,
        {
          //  @example /homeassistant/hello
          topic: string;
          //  @example The temperature is {{ states('sensor.temperature') }} @constraints  template:
          payload?: unknown;
          //  @constraints  boolean:
          evaluate_payload?: boolean;
          //
          qos?: '0' | '1' | '2';
          //  @constraints  boolean:
          retain?: boolean;
        }
      >;
      // undefined
      dump: ServiceFunction<
        object,
        T,
        {
          //  @example OpenZWave/#
          topic?: string;
          //  @constraints  number: min: 1, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
        }
      >;
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    counter: {
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
      // undefined
      reset: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          value: number;
        }
      >;
    };
    schedule: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      getSchedule: ServiceFunction<object, T, object>;
    };
    matter: {
      // undefined
      waterHeaterBoost: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 60, max: 14400, step: 60, mode: box
          duration: number;
          //  @constraints  boolean:
          emergency_boost?: boolean;
          //  @constraints  number: min: 30, max: 65, step: 1, mode: slider
          temporary_setpoint?: number;
        }
      >;
    };
    button: {
      // undefined
      press: ServiceFunction<object, T, object>;
    };
    climate: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      setHvacMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  state: hide_states: unavailable,unknown, multiple: false
          hvac_mode?: unknown;
        }
      >;
      // undefined
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          //  @example away
          preset_mode: string;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          temperature?: number;
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_high?: number;
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_low?: number;
          //
          hvac_mode?: 'off' | 'auto' | 'cool' | 'dry' | 'fan_only' | 'heat_cool' | 'heat';
        }
      >;
      // undefined
      setHumidity: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 30, max: 99, unit_of_measurement: %, step: 1, mode: slider
          humidity: number;
        }
      >;
      // undefined
      setFanMode: ServiceFunction<
        object,
        T,
        {
          //  @example low
          fan_mode: string;
        }
      >;
      // undefined
      setSwingMode: ServiceFunction<
        object,
        T,
        {
          //  @example on
          swing_mode: string;
        }
      >;
      // undefined
      setSwingHorizontalMode: ServiceFunction<
        object,
        T,
        {
          //  @example on
          swing_horizontal_mode: string;
        }
      >;
    };
    cover: {
      // undefined
      openCover: ServiceFunction<object, T, object>;
      // undefined
      closeCover: ServiceFunction<object, T, object>;
      // undefined
      setCoverPosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          position: number;
        }
      >;
      // undefined
      stopCover: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      openCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      closeCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      stopCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      setCoverTiltPosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          tilt_position: number;
        }
      >;
      // undefined
      toggleCoverTilt: ServiceFunction<object, T, object>;
    };
    fan: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage?: number;
          //  @example auto
          preset_mode?: string;
        }
      >;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      increaseSpeed: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage_step?: number;
        }
      >;
      // undefined
      decreaseSpeed: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage_step?: number;
        }
      >;
      // undefined
      oscillate: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          oscillating: boolean;
        }
      >;
      // undefined
      setDirection: ServiceFunction<
        object,
        T,
        {
          //
          direction: 'forward' | 'reverse';
        }
      >;
      // undefined
      setPercentage: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage: number;
        }
      >;
      // undefined
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          //  @example auto
          preset_mode: string;
        }
      >;
    };
    lock: {
      // undefined
      unlock: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      lock: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      open: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
    };
    number: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 42
          value: string;
        }
      >;
    };
    select: {
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
    };
    vacuum: {
      // undefined
      start: ServiceFunction<object, T, object>;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      returnToBase: ServiceFunction<object, T, object>;
      // undefined
      cleanSpot: ServiceFunction<object, T, object>;
      // undefined
      locate: ServiceFunction<object, T, object>;
      // undefined
      stop: ServiceFunction<object, T, object>;
      // undefined
      setFanSpeed: ServiceFunction<
        object,
        T,
        {
          //  @example low
          fan_speed: string;
        }
      >;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //  @example set_dnd_timer
          command: string;
          //  @example { 'key': 'value' } @constraints  object: multiple: false
          params?: object;
        }
      >;
    };
    valve: {
      // undefined
      openValve: ServiceFunction<object, T, object>;
      // undefined
      closeValve: ServiceFunction<object, T, object>;
      // undefined
      setValvePosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          position: number;
        }
      >;
      // undefined
      stopValve: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    waterHeater: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      setAwayMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          away_mode: boolean;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.5, mode: box, unit_of_measurement: °
          temperature: number;
          //  @example eco
          operation_mode?: string;
        }
      >;
      // undefined
      setOperationMode: ServiceFunction<
        object,
        T,
        {
          //  @example eco
          operation_mode: string;
        }
      >;
    };
    reolink: {
      // undefined
      playChime: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          //
          ringtone:
            | 'citybird'
            | 'originaltune'
            | 'pianokey'
            | 'loop'
            | 'attraction'
            | 'hophop'
            | 'goodday'
            | 'operetta'
            | 'moonlight'
            | 'waybackhome';
        }
      >;
      // undefined
      ptzMove: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 64, step: 1, mode: slider
          speed: number;
        }
      >;
    };
    cast: {
      // undefined
      showLovelaceView: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example lovelace-cast
          dashboard_path?: string;
          //  @example downstairs
          view_path: string;
        }
      >;
    };
    inputText: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example This is an example text
          value: string;
        }
      >;
    };
    inputDatetime: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setDatetime: ServiceFunction<
        object,
        T,
        {
          //  @example '2019-04-20'
          date?: string;
          //  @example '05:04:20' @constraints  time:
          time?: string;
          //  @example '2019-04-20 05:04:20'
          datetime?: string;
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          timestamp?: number;
        }
      >;
    };
    synologyDsm: {
      // undefined
      reboot: ServiceFunction<
        object,
        T,
        {
          //  @example 1NDVC86409
          serial?: string;
        }
      >;
      // undefined
      shutdown: ServiceFunction<
        object,
        T,
        {
          //  @example 1NDVC86409
          serial?: string;
        }
      >;
    };
    notify: {
      // undefined
      sendMessage: ServiceFunction<
        object,
        T,
        {
          //
          message: string;
          //
          title?: string;
        }
      >;
      // undefined
      persistentNotification: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific @constraints  object: multiple: false
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_ipad_3 integration.
      mobileAppIpad3: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_jerry_s_iphone integration.
      mobileAppJerrySIphone: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_lenovo_cd_18781y integration.
      mobileAppLenovoCd18781Y: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the google_assistant_sdk service.
      googleAssistantSdk: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
    };
    template: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    googleAssistantSdk: {
      // undefined
      sendTextCommand: ServiceFunction<
        object,
        T,
        {
          //  @example turn off kitchen TV
          command?: string;
          //  @example media_player.living_room_speaker
          media_player?: string;
        }
      >;
    };
    spotifyplus: {
      // Add one or more items to the end of the user's current Spotify Player playback queue.
      addPlayerQueueItems: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A list of Spotify track or episode URIs to add to the queue (spotify:track:6zd8T1PBe9JFHmuVnurdRp, spotify:track:1kWUud3vY5ij5r62zxpTRy); values can be track or episode URIs.  All URIs must be of the same type - you cannot mix and match tracks and episodes.  An unlimited number of items can be added in one request, but the more items the longer it will take. @example spotify:track:6zd8T1PBe9JFHmuVnurdRp
          uris: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          verify_device_id?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the final add request (if necessary). This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.15; value range is 0 - 10. @example 0.15 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Check if one or more albums (or the currently playing album) exists in the current user's 'Your Library' favorites.
      checkAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Check if one or more artists (or the currently playing artists) is followed in the current user's 'Your Library' favorites.
      checkArtistsFollowing: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Check if one or more audiobooks (or the currently playing audiobook) exists in the current user's 'Your Library' favorites.
      checkAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Check if one or more episodes (or the currently playing episode) exists in the current user's 'Your Library' favorites.
      checkEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Check if one or more playlists (or the currently playing playlist) is followed in the current user's 'Your Library' favorites.
      checkPlaylistFollowers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility.
          user_ids?: string;
        }
      >;
      // Check if one or more shows (or the currently playing show) exists in the current user's 'Your Library' favorites.
      checkShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Check if one or more tracks (or the currently playing track) exists in the current user's 'Your Library' favorites.
      checkTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Check if one or more items (or the currently playing item) exists in the current user's 'Your Library' favorites. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, artists, users, and playlists.
      checkUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Check to see if the current user is following one or more users.
      checkUsersFollowing: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify user ID's to check (e.g. `smedjan, 7piUznRWxNyKpaPvmOSdiZ`).  A maximum of 50 ID's can be specified. @example smedjan, 7piUznRWxNyKpaPvmOSdiZ
          ids: string;
        }
      >;
      // Add the current user as a follower of one or more artists.
      followArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Add the current user as a follower of a playlist.
      followPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          public?: boolean;
        }
      >;
      // Add the current user as a follower of one or more users.
      followUsers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of the Spotify user IDs (e.g. 'smedjan,3758dfdsfjk435hjk6k79lm0n3c4').  A maximum of 50 IDs can be sent in one request. @example smedjan,3758dfdsfjk435hjk6k79lm0n3c4
          ids: string;
        }
      >;
      // Get Spotify catalog information for a single album.
      getAlbum: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the album.  If omitted, the currently playing album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE
          album_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get a list of the albums saved in the current Spotify user's 'Your Library'.
      getAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a list of new album releases featured in Spotify.
      getAlbumNewReleases: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          country?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information about an album's tracks.
      getAlbumTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the album (e.g. `6vc9OTcyd3hyzabCmsdnwE`). If null, the currently playing album uri id value is used; a Spotify Free or Premium account is required to correctly read the currently playing context. @example 6vc9OTcyd3hyzabCmsdnwE
          album_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information for a single artist.
      getArtist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
        }
      >;
      // Get Spotify catalog information about an artist's albums.
      getArtistAlbums: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // A comma-separated list of keywords that will be used to filter the response.  If not supplied, only `album` types will be returned. Valid values are `album`, `single`, `appears_on`, `compilation`. @example album
          include_groups?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get artist about information from the Spotify Artist Biography page for the specified Spotify artist ID.
      getArtistInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
        }
      >;
      // Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
      getArtistRelatedArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information about an artist's top tracks by country.
      getArtistTopTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get the current user's followed artists.
      getArtistsFollowed: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The last artist ID retrieved from the previous request, or null for the first request. @example 6APm8EjxOHSYM5B4i3vT3q
          after?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single audiobook.
      getAudiobook: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used. @example 74aydHJKgYz3AIq3jjBSv1
          audiobook_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get Spotify catalog information about an audiobook's chapters.
      getAudiobookChapters: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used. @example 74aydHJKgYz3AIq3jjBSv1
          audiobook_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the audiobooks saved in the current Spotify user's 'Your Library'.
      getAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a sorted list of ALL categories used to tag items in Spotify.
      getBrowseCategorysList: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). @example es_MX
          locale?: string;
          // True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value. @example False @constraints  boolean:
          refresh?: boolean;
        }
      >;
      // Get a list of Spotify playlists tagged with a particular category.
      getCategoryPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify category ID (not name) for the category. @example dinner
          category_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single audiobook chapter identified by its unique Spotify ID.
      getChapter: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the chapter.  If omitted, the currently playing chapter uri id value is used. @example 3V0yw9UDrYAfkhAvTrvt9Y
          chapter_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Gets the contents of an image url and transfers the contents to the local file system.
      getCoverImageFile: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The cover image url whose contents are to be retrieved. @example https://i.scdn.co/image/ab67616d0000b27316c019c87a927829804caf0b
          image_url: string;
          // Fully-qualified path to store the downloaded image to. @example /config/www/images/cover_file_image.jpg
          output_path: string;
        }
      >;
      // Get information about the current playback state, including track or episode, and progress. If the Spotify Web API reports nothing as playing, then the device-specific playback state is returned (if one exists).
      getDevicePlaybackState: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  This could be an id, name, a default device indicator (e.g. '*'), or null to utilize the active player device. @example Sonos 01
          device_id?: string;
        }
      >;
      // Get Spotify catalog information for a single episode identified by its unique Spotify ID.
      getEpisode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the episode.  If omitted, the currently playing episode uri id value is used. @example 26c0zVyOv1lzfYpBXdh1zC
          episode_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get a list of the episodes saved in the current Spotify user's 'Your Library'.
      getEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a list of Spotify featured playlists.
      getFeaturedPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). @example es_MX
          locale?: string;
          // A timestamp in ISO 8601 format (yyyy-MM-ddTHH:mm:ss). Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. @example 2023-10-23T09:00:00
          timestamp?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Gets the Id portion of a Spotify URI value.
      getIdFromUri: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify URI value to parse. Example: `spotify:track:6vc9OTcyd3hyzabCmsdnwE`. @example spotify:track:6vc9OTcyd3hyzabCmsdnwE
          uri: string;
        }
      >;
      // Get color palette RGB values from the specified image source.
      getImagePaletteColors: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The image source to extract color palette information from.  If the prefix of the value is `http:` or `https:`, then the image is downloaded from the url.  This can also point to a filename on the local file system.  If null, the currently playing Spotify track image url is used.  Example = `http://mydomain/image1.jpg`, `c:/image1.jpg` @example https://i.scdn.co/image/ab67616d0000b273b3f691a43c5d139895f8cc3d
          image_source?: string;
          // The size of the palette (max number of colors).  Default is 10.  Range is 1 to 256. @example 10 @constraints  number: min: 1, max: 256, mode: box, step: 1
          color_count?: number;
          // Controls the processing time and quality of the palette generation.  A lower value (e.g. 1) results in higher quality but takes more processing time, while a higher value (e.g. 5) is faster but may result in a lower-quality palette.  Default is 3; Range is 1 to 10. @example 3 @constraints  number: min: 1, max: 10, mode: box, step: 1
          color_quality?: number;
          // Removes colors that are too dark based on their brightness value.  Range is 0 to 765.  Default is None. @example 200 @constraints  number: min: 0, max: 765, mode: box, step: 1
          brightness_filter_low?: number;
          // Removes colors that are too light based on their brightness value.  Range is 0 to 765.  Default is None. @example 600 @constraints  number: min: 0, max: 765, mode: box, step: 1
          brightness_filter_high?: number;
          // Remove colors that are too close to each other for the specified hue.  This keeps the colors looking fairly distinct.  Range is 0 to 360.  Default is None. @example 20 @constraints  number: min: 0, max: 360, mode: box, step: 1
          hue_distance_filter?: number;
        }
      >;
      // Get vibrant color palette values from the specified image source.
      getImageVibrantColors: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The image source to extract color palette information from.  If the prefix of the value is `http:` or `https:`, then the image is downloaded from the url.  This can also point to a filename on the local file system.  If null, the currently playing Spotify track image url is used.  Example = `http://mydomain/image1.jpg`, `c:/image1.jpg` @example https://i.scdn.co/image/ab67616d0000b2733deaee5f76ab2da15dd8db86
          image_source?: string;
          // The number of colors in the initial palette from which swatches will be generated.  Default is 64; Range is 1 to 256. @example 64 @constraints  number: min: 1, max: 256, mode: box, step: 1
          color_count?: number;
          // Controls the processing time and quality of the palette generation.  A lower value (e.g. 1) results in higher quality but takes more processing time, while a higher value (e.g. 5) is faster but may result in a lower-quality palette.  Default is 5; Range is 1 to 10. @example 5 @constraints  number: min: 1, max: 10, mode: box, step: 1
          color_quality?: number;
        }
      >;
      // Get information about a user's available Spotify Connect player devices.  Some device models are not supported and will not be listed in the API response.
      getPlayerDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value. @example True @constraints  boolean:
          refresh?: boolean;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get information about the user's current playback state, including track or episode, progress, and active device.
      getPlayerPlaybackState: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
        }
      >;
      // Get information about the content that was last playing on the Spotify Player, including context, item (track / episode), progress, and active device.
      getPlayerLastPlayedInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Get the object currently being played on the user's Spotify account.
      getPlayerNowPlaying: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
        }
      >;
      // Get the list of objects that make up the user's playback queue.
      getPlayerQueueInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Get tracks from the current user's recently played tracks; currently doesn't support podcast episodes, and only 50 items may be returned due to spotify limits.
      getPlayerRecentTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // Returns all items after (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `after` is specified, `before` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item). @example 1706218456821 @constraints  number: min: 0, max: 99999999999999, mode: box, step: 1
          after?: number;
          // Returns all items before (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `before` is specified, `after` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item). @example 1706218467821 @constraints  number: min: 0, max: 99999999999999, mode: box, step: 1
          before?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a playlist owned by a Spotify user.
      getPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist.  If omitted, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of fields to return from the Spotify Web API. All fields are returned if omitted. Limiting fields results can improve performance. @example description,id,name,public,snapshot_id,type,uri,tracks(limit,next,offset,previous,total,items(track(id,name,track_number,type,uri,album(id,images,name,total_tracks,type,uri,artists(id,name,type,uri)))))
          fields?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
        }
      >;
      // Get the current image associated with a specific playlist.
      getPlaylistCoverImage: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If null, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id?: string;
        }
      >;
      // Get a list of the playlists owned or followed by the current Spotify user.
      getPlaylistFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get full details of the items of a playlist owned by a Spotify user.
      getPlaylistItems: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If null, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // Filters for the query; a comma-separated list of the fields to return. If omitted, all fields are returned. For example, specify 'items(track(name,uri))' to get just the playlist's track names and URIs. @example items(track(name,uri,album(name,uri)))
          fields?: string;
          // A comma-separated list of item types that your client supports besides the default track type.  Valid types are 'track' and 'episode'. @example track
          additional_types?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the playlists owned or followed by a Spotify user.
      getPlaylistsForUser: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The user's Spotify user ID (e.g. `smedjan`). @example smedjan
          user_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single show identified by its unique Spotify ID.
      getShow: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the show.  If omitted, the currently playing show uri id value is used. @example 5CfCWKI5pZ28U0uOzXkDHe
          show_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get Spotify catalog information about a show's episodes.
      getShowEpisodes: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the show.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE
          show_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the shows saved in the current Spotify user's 'Your Library'.
      getShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
          // True (default) to exclude audiobook shows from the returned list, leaving only podcast shows; otherwise, False to include all results returned by the Spotify Web API. @example True @constraints  boolean:
          exclude_audiobooks?: boolean;
        }
      >;
      // Get information about a specific Spotify Connect player device, and (optionally) activate the device if it requires it.
      getSpotifyConnectDevice: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If an '*' is specified, then the SpotifyPlus default device is used. @example Bose-ST10-1
          device_value: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          verify_user_context?: boolean;
          // Maximum time to wait (in seconds) for the device to become active in the Spotify Connect device list.  This value is only used if a Connect command has to be issued to activate the device. Default is 5; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          verify_timeout?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          refresh_device_list?: boolean;
          // True to activate the device if necessary; otherwise, False. @example True @constraints  boolean:
          activate_device?: boolean;
          // Time delay (in seconds) to wait AFTER issuing any command to the device.  This delay will give the spotify zeroconf api time to process the change before another command is issued.  Default is 0.25; value range is 0 - 10. @example 0.25 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Get information about all available Spotify Connect player (both static and dynamic) devices.
      getSpotifyConnectDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True (default) to return real-time information from the spotify zeroconf api and update the cache; otherwise, False to just return the cached value. @example True @constraints  boolean:
          refresh?: boolean;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single track identified by its unique Spotify ID.
      getTrack: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the track.  If omitted, the currently playing track uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy
          track_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get audio feature information for a single track identified by its unique Spotify ID.
      getTrackAudioFeatures: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the track.  Example = `1kWUud3vY5ij5r62zxpTRy`.  If null, the currently playing track uri id value is used. @example 7ouMYWpwJ422jRcDASZB7P
          track_id?: string;
        }
      >;
      // Get a list of the tracks saved in the current Spotify user's 'Your Library'.
      getTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
          // Filter returned entries by an artist name.  Value can be the full name of the artist (e.g. 'Jeremy Camp'), or a partial name (e.g. 'Camp').
          filter_artist?: string;
          // Filter returned entries by an album name.  Value can be the full name of the album (e.g. 'Carried Me'), or a partial name (e.g. 'Carried').
          filter_album?: string;
        }
      >;
      // Get track recommendations for specified criteria.
      getTrackRecommendations: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items. Default is 20, Range is 1 to 50. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // A comma separated list of Spotify IDs for seed artists (e.g. 4NHQUGzhtTLFvgF5SZesLK).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedGenres and seedTracks are not set.
          seed_artists?: string;
          // A comma separated list of any genres in the set of available genre seeds (e.g. rock,hard-rock,rock-n-roll).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedTracks are not set. @example rock,hard-rock,rock-n-roll
          seed_genres?: string;
          // A comma separated list of Spotify IDs for a seed track (e.g. 0c6xIDDpzE81m2q797ordA).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedGenres are not set.
          seed_tracks?: string;
          // Restrict results to only those tracks whose acousticness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_acousticness?: number;
          // Restrict results to only those tracks whose acousticness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_acousticness?: number;
          // Restrict results to only those tracks whose acousticness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_acousticness?: number;
          // Restrict results to only those tracks whose danceability level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_danceability?: number;
          // Restrict results to only those tracks whose danceability level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_danceability?: number;
          // Restrict results to only those tracks whose acousticness is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_danceability?: number;
          // Restrict results to only those tracks whose duration is greater than the specified value in milliseconds. @constraints  number: mode: box, step: 1
          min_duration_ms?: number;
          // Restrict results to only those tracks whose duration is less than the specified value in milliseconds. @constraints  number: mode: box, step: 1
          max_duration_ms?: number;
          // Restrict results to only those tracks whose duration is equal to the specified value in milliseconds. @constraints  number: mode: box, step: 1
          target_duration_ms?: number;
          // Restrict results to only those tracks whose energy level is greater than the specified value.  Range is `0` - `1`. @example 0.975 @constraints  number: mode: box, step: 1
          min_energy?: number;
          // Restrict results to only those tracks whose energy level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_energy?: number;
          // Restrict results to only those tracks whose energy level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_energy?: number;
          // Restrict results to only those tracks whose instrumentalness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_instrumentalness?: number;
          // Restrict results to only those tracks whose instrumentalness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_instrumentalness?: number;
          // Restrict results to only those tracks whose instrumentalness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_instrumentalness?: number;
          // Restrict results to only those tracks whose key level is greater than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          min_key?: number;
          // Restrict results to only those tracks whose key level is less than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          max_key?: number;
          // Restrict results to only those tracks whose key level is equal to the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          target_key?: number;
          // Restrict results to only those tracks whose liveness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_liveness?: number;
          // Restrict results to only those tracks whose liveness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_liveness?: number;
          // Restrict results to only those tracks whose liveness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_liveness?: number;
          // Restrict results to only those tracks whose loudness level is greater than the specified value. @example -9.201 @constraints  number: mode: box, step: 1
          min_loudness?: number;
          // Restrict results to only those tracks whose loudness level is less than the specified value. @constraints  number: mode: box, step: 1
          max_loudness?: number;
          // Restrict results to only those tracks whose loudness level is equal to the specified value. @constraints  number: mode: box, step: 1
          target_loudness?: number;
          // Restrict results to only those tracks whose mode level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_mode?: number;
          // Restrict results to only those tracks whose mode level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_mode?: number;
          // Restrict results to only those tracks whose mode level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_mode?: number;
          // Restrict results to only those tracks whose popularity level is greater than the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          min_popularity?: number;
          // Restrict results to only those tracks whose popularity level is less than the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          max_popularity?: number;
          // Restrict results to only those tracks whose popularity level is equal to the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          target_popularity?: number;
          // Restrict results to only those tracks whose speechiness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_speechiness?: number;
          // Restrict results to only those tracks whose speechiness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_speechiness?: number;
          // Restrict results to only those tracks whose speechiness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_speechiness?: number;
          // Restrict results to only those tracks with a tempo greater than the specified number of beats per minute. @constraints  number: mode: box, step: 1
          min_tempo?: number;
          // Restrict results to only those tracks with a tempo less than the specified number of beats per minute. @constraints  number: mode: box, step: 1
          max_tempo?: number;
          // Restrict results to only those tracks with a tempo equal to the specified number of beats per minute. @constraints  number: mode: box, step: 1
          target_tempo?: number;
          // Restrict results to only those tracks whose time signature is greater than the specified value.  Range is `0` - `11`. @example 4 @constraints  number: mode: box, step: 1
          min_time_signature?: number;
          // Restrict results to only those tracks whose time signature is less than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          max_time_signature?: number;
          // Restrict results to only those tracks whose time signature is equal to the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          target_time_signature?: number;
          // Restrict results to only those tracks whose valence level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_valence?: number;
          // Restrict results to only those tracks whose valence level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_valence?: number;
          // Restrict results to only those tracks whose valence level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_valence?: number;
        }
      >;
      // Get audio features for multiple tracks based on their Spotify IDs.
      getTracksAudioFeatures: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of the Spotify track IDs. Maximum of 100 IDs.  Example = `7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B`. @example 7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B
          ids: string;
        }
      >;
      // Get the current user's top artists based on calculated affinity.
      getUsersTopArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks). @example long_term
          time_range?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get the current user's top tracks based on calculated affinity.
      getUsersTopTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks). @example long_term
          time_range?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Pause media play for the specified Spotify Connect device.
      playerMediaPause: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Start playing one or more tracks of the specified context on a Spotify Connect device.
      playerMediaPlayContext: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify URI of the context to play (e.g. `spotify:album:6vc9OTcyd3hyzabCmsdnwE`).  Valid contexts are albums, artists & playlists. @example spotify:album:6vc9OTcyd3hyzabCmsdnwE
          context_uri: string;
          // Indicates from what Uri in the context playback should start (e.g. `1kWUud3vY5ij5r62zxpTRy`.  Only available when contextUri corresponds to an artist, album or playlist.  The offsetPosition argument will be used if this value is null. @example spotify:track:1kWUud3vY5ij5r62zxpTRy
          offset_uri?: string;
          // Indicates from what position in the context playback should start.  The value is zero-based, and can't be negative.  Only available when contextUri corresponds to an album or playlist. @example 3 @constraints  number: min: 0, max: 11000, mode: box, step: 1
          offset_position?: number;
          // The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track. @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
          // True to play the most current episode of a podcast show, starting at the beginning; otherwise, False to resume playing of the podcast episode that was previously played. Default is False. This argument is only considered for 'show' contexts. @example False @constraints  boolean:
          play_show_latest_episode?: boolean;
        }
      >;
      // Start playing track favorites on the specified Spotify Connect device.
      playerMediaPlayTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          resolve_device_id?: boolean;
          // The maximum number of items to retrieve from favorites.  Default is 200. @example 200 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // Filter returned entries by an artist name.  Value can be the full name of the artist (e.g. 'Jeremy Camp'), or a partial name (e.g. 'Camp').
          filter_artist?: string;
          // Filter returned entries by an album name.  Value can be the full name of the album (e.g. 'Carried Me'), or a partial name (e.g. 'Carried').
          filter_album?: string;
        }
      >;
      // Start playing one or more tracks on the specified Spotify Connect device.
      playerMediaPlayTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track URIs to play; can be track or episode URIs.  A maximum of 50 items can be specified. @example spotify:track:6zd8T1PBe9JFHmuVnurdRp,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris: string;
          // The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track. @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
        }
      >;
      // Resume media play for the specified Spotify Connect device.
      playerMediaResume: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Seeks to the given absolute or relative position in the user's currently playing track for the specified Spotify Connect device.
      playerMediaSeek: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The absolute position in milliseconds to seek to; must be a positive number or zero if the `relativePositionMS` argument is specified. Passing in a position that is greater than the length of the track will cause the player to start playing the next song. Example = `25000` to start playing at the 25 second mark. @example 25000 @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // The relative position in milliseconds to seek to; can be a positive or negative number, or zero if the `positionMS` argument is specified. Example = `-10000` to seek behind by 10 seconds; `10000` to seek ahead by 10 seconds. @example 10000 @constraints  number: min: -999999999, max: 999999999, mode: box, step: 1
          relative_position_ms?: number;
        }
      >;
      // Skips to next track in the user's queue for the specified Spotify Connect device.
      playerMediaSkipNext: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Skips to previous track in the user's queue for the specified Spotify Connect device.
      playerMediaSkipPrevious: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set repeat mode for the specified Spotify Connect device.
      playerSetRepeatMode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The repeat mode state to set; `track` will repeat the current track; `context` will repeat the current context; `off` will turn repeat off.  Default is 'off'. @example off
          state: 'off' | 'track' | 'context';
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set shuffle mode for the specified Spotify Connect device.
      playerSetShuffleMode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True to set player shuffle mode to on; otherwise, False for no shuffle. @example True @constraints  boolean:
          state: boolean;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set volume level for the specified Spotify Connect device.
      playerSetVolumeLevel: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The volume level to set, expressed as a percentage value (e.g. 25).  Must be a value from 0 (muted) to 100 (max volume) inclusive. @example 25 @constraints  number: min: 0, max: 100, mode: box, step: 1
          volume_level: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Transfer playback to a new Spotify Connect device and optionally begin playback.
      playerTransferPlayback: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device on which playback should be started/transferred.  If no device is specified, then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // True (default) to start playback on the new device; otherise, False to keep the current playback state on the existing device. @example True @constraints  boolean:
          play?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          refresh_device_list?: boolean;
          // True to issue a Spotify Connect Disconnect call prior to transfer, which will force the device to reconnect to Spotify Connect; otherwise, False to not disconnect. Default is True. @example True @constraints  boolean:
          force_activate_device?: boolean;
          // The player device identifier where play is being transferred from; only used to stop play on restricted devices prior to transferring playback. @example Office
          device_id_from?: string;
        }
      >;
      // Replace the image used to represent a specific playlist.
      playlistCoverImageAdd: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE). @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id: string;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size. @example www/images/spotify_playlist_default_image.png
          image_path: string;
        }
      >;
      // Change a playlists details (name, description, and public / private state).
      playlistChange: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. `5AC9ZXA7nJ7oGWO911FuDG`). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // The updated name for the playlist (e.g. `My Updated Playlist`).  This name does not need to be unique; a user may have several playlists with the same name. @example My Updated Playlist
          name: string;
          // The playlist description, as displayed in Spotify Clients and in the Web API. @example A Playlist updated by the SpotifyPlus integration
          description: string;
          // If true, the playlist will be public; if false, it will be private. @example False @constraints  boolean:
          public: boolean;
          // If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false. @example False @constraints  boolean:
          collaborative: boolean;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to update the existing playlist image. @example www/images/spotify_playlist_default_image.png
          image_path?: string;
        }
      >;
      // Create an empty playlist for a Spotify user.  The playlist will remain empty until you add tracks.
      playlistCreate: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility.
          user_id?: string;
          // The name for the new playlist (e.g. `My New Playlist`).  This name does not need to be unique; a user may have several playlists with the same name. @example My New Playlist
          name: string;
          // The playlist description, as displayed in Spotify Clients and in the Web API. @example A Playlist created by the SpotifyPlus integration
          description: string;
          // If true, the playlist will be public; if false, it will be private. @example False @constraints  boolean:
          public: boolean;
          // If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false. @example False @constraints  boolean:
          collaborative: boolean;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to add a playlist image. @example www/images/spotify_playlist_default_image.png
          image_path?: string;
        }
      >;
      // Add one or more items to a user's playlist.  Items are added in the order they are listed in the `uris` argument.
      playlistItemsAdd: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // A comma-separated list of Spotify URIs to add; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used. @example spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:episode:512ojhOuo1ktJprKbVcKyQ
          uris?: string;
          // The position to insert the items, a zero-based index.  For example, to insert the items in the first position use a value of 0; to insert the items in the third position use a value of 2.  Omit the parameter to append the items to the end of the playlist. @example 0 @constraints  number: min: 0, max: 9999, mode: box, step: 1
          position?: number;
        }
      >;
      // Removes (clears) all items from a user's playlist.
      playlistItemsClear: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
        }
      >;
      // Remove one or more items from a user's playlist.
      playlistItemsRemove: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // A comma-separated list of Spotify URIs to remove; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used. @example spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:episode:512ojhOuo1ktJprKbVcKyQ
          uris?: string;
          // The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
          snapshot_id?: string;
        }
      >;
      // Reorder items in a user's playlist.
      playlistItemsReorder: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 4yptcTKnXjCu3V92tVVafS). @example 4yptcTKnXjCu3V92tVVafS
          playlist_id: string;
          // The position of the first item to be reordered.  This is a one-offset integer (NOT zero-offset). @example 2 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          range_start: number;
          // The position where the items should be inserted.  To reorder the items to the end of the playlist, simply set `insertBefore` to the position after the last item.  This is a one-offset integer (NOT zero-offset). @example 1 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          insert_before: number;
          // The amount of items to be reordered; defaults to 1 if not set.  The range of items to be reordered begins from the `rangeStart` position, and includes the `rangeLength` subsequent items. @example 1 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          range_length?: number;
          // The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
          snapshot_id?: string;
        }
      >;
      // Replace one or more items in a user's playlist. Replacing items in a playlist will overwrite its existing items. This service can also be used to clear a playlist.
      playlistItemsReplace: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`). @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id: string;
          // A comma-separated list of Spotify URIs to replace; can be track or episode URIs (e.g. `spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:episode:26c0zVyOv1lzfYpBXdh1zC`). A maximum of 100 items can be specified in one request.
          uris?: string;
        }
      >;
      // Remove one or more albums from the current user's 'Your Library'.
      removeAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Remove one or more audiobooks from the current user's 'Your Library'.
      removeAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Remove one or more episodes from the current user's 'Your Library'.
      removeEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Remove one or more shows from the current user's 'Your Library'.
      removeShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Remove one or more tracks from the current user's 'Your Library'.
      removeTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Remove one or more items from the current user's 'Your Library'. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, users, and playlists.
      removeUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Save one or more albums to the current user's 'Your Library'.
      saveAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Save one or more audiobooks to the current user's 'Your Library'.
      saveAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Save one or more episodes to the current user's 'Your Library'.
      saveEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Save one or more shows to the current user's 'Your Library'.
      saveShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Save one or more tracks to the current user's 'Your Library'.
      saveTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Save one or more items to the current user's 'Your Library'. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, users, and playlists.
      saveUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
      searchAll: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Welcome to the New
          criteria: string;
          // A comma-separated list of item types to search across.  Search results include hits from all the specified item types.  For example, 'album,track' returns both albums and tracks matching criteria argument.  Allowed values are 'album', 'artist', 'playlist', 'track', 'show', 'episode', 'audiobook'.  Default is 'track'. @example album,artist,track,playlist
          criteria_type?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request, per criteria type. Paging is automatically used to retrieve all available items up to the maximum number specified per type. Default is 20. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Albums that match a keyword string.
      searchAlbums: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Welcome to the New
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Artists that match a keyword string.
      searchArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example MercyMe
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Audiobooks that match a keyword string.
      searchAudiobooks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example The Elfstones of Shannara
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Episodes that match a keyword string.
      searchEpisodes: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Armchair Anonymous
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Playlists that match a keyword string.
      searchPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Daily Mix
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Show (aka Podcasts) that match a keyword string.
      searchShows: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Dax Shepard
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Tracks that match a keyword string.
      searchTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Dear Younger Me
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Triggers a scan interval sequence, which will update HA State values from content currently being played on the user's Spotify account.
      triggerScanInterval: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Remove the current user as a follower of one or more artists.
      unfollowArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Remove the current user as a follower of a playlist.
      unfollowPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
        }
      >;
      // Remove the current user as a follower of one or more users.
      unfollowUsers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify user IDs (e.g. `smedjan,3758dfdsfjk435hjk6k79lm0n3c4`).  A maximum of 40 IDs can be sent in one request. @example smedjan,3758dfdsfjk435hjk6k79lm0n3c4
          ids: string;
        }
      >;
      // Calls the `addUser` Spotify Zeroconf API endpoint to issue a call to SpConnectionLoginBlob.  If successful, the associated device id is added to the Spotify Connect active device list for the specified user account.  This will also issue a `resetUsers` call prior to the `addUser` call.
      zeroconfDeviceConnect: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // True if the host device utilizes HTTPS Secure Sockets Layer (SSL) support; otherwise, False to utilize HTTP.  Default is False (HTTP). @example False @constraints  boolean:
          use_ssl?: boolean;
          // Spotify user name to login with (e.g. 'yourusername@mail.com').  This MUST match the account name (or one of them) that was used to configure Spotify Connect on the manufacturer device. If not specified, the integration options Spotify Connect username value will be used. @example yourusername@mail.com
          username?: string;
          // Spotify Connect user password to login with. If not specified, the integration options Spotify Connect password value will be used. @example yourpassword
          password?: string;
          // Spotify Connect login id to login with (e.g. '31l77fd87g8h9j00k89f07jf87ge').  This is also known as the canonical user id value.  This MUST be the value that relates to the `username` argument. If not specified, the integration options Spotify Connect loginId value will be used. @example 31l77y75hfnhk79f7gk6jkk878mg
          loginid?: string;
          // True if a Disconnect should be made prior to the Connect call.  This will ensure that the active user is logged out, which must be done if switching user accounts; otherwise, False to not issue a Disconnect call.  Default is False. @example False @constraints  boolean:
          pre_disconnect?: boolean;
          // True to ensure that the device id is present in the Spotify Connect device list before issuing a call to Connect; Connect will not be called if the device id is already in the list; otherwise, False to always call Connect to add the device.  Default is False. @example False @constraints  boolean:
          verify_device_list_entry?: boolean;
          // Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Calls the `resetUsers` Spotify Zeroconf API endpoint to issue a call to SpConnectionLogout. The currently logged in user (if any) will be logged out of Spotify Connect, and the device id removed from the active Spotify Connect device list.
      zeroconfDeviceDisconnect: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. False). @example False @constraints  boolean:
          use_ssl?: boolean;
          // Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Calls the `getInfo` Spotify Zeroconf API endpoint to return information about the device.
      zeroconfDeviceGetinfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. False). @example False @constraints  boolean:
          use_ssl?: boolean;
        }
      >;
      // Discover Spotify Connect devices on the local network via the ZeroConf (aka MDNS) service, and return details about each device.
      zeroconfDiscoverDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // Maximum amount of time to wait (in seconds) for the discovery to complete.  Default is 5, range is 1 thru 10. @example 5 @constraints  number: min: 1, max: 10, mode: box, step: 1
          timeout?: number;
        }
      >;
      // Set level used for volume step services.
      volumeSetStep: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Level percentage to adjust the volume by, expressed as a floating point number from 0.01 - 1.0.  Default is 0.10 (e.g. 10 percent), range is 0.01 to 1.00. @constraints  number: min: 0.01, max: 1, mode: box, step: 1
          level?: number;
          // Level percentage to adjust the volume by. Default is 10, range is 1 to 100 (e.g. percent). level argument is ignored if this argument is specified. @example 5 @constraints  number: min: 1, max: 100, mode: box, step: 1
          level_percent?: number;
        }
      >;
      // List Home Assistant application credential mappings to determine which configuration entitys use which credential.
      listApplicationCredentialMappings: ServiceFunction<
        object,
        T,
        {
          // Limit entries displayed to the specified domain name (e.g. 'spotifyplus', 'spotify', etc). @example spotifyplus
          filter_domain?: string;
          // True (default) to limit entries displayed to those that have Application Credentials defined; otherwise, False to include all entries. @example true @constraints  boolean:
          filter_credentials_only?: boolean;
          // True to list entities that are children of the domain; otherwise, False (default) to exclude domain entity details. @example false @constraints  boolean:
          list_domain_entities?: boolean;
        }
      >;
      // Forces Spotify Authorization token to expire within 10 seconds; used to test token refresh processing.
      testTokenExpire: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
    };
    samsungtvSmart: {
      // Send to samsung TV the command to change picture mode.
      selectPictureMode: ServiceFunction<
        object,
        T,
        {
          // Name of the target entity @example media_player.tv
          entity_id: string;
          // Name of the picture mode to switch to. Possible options can be found in the picture_mode_list state attribute. @example Standard
          picture_mode: string;
        }
      >;
      // Send to samsung TV the command to set art mode.
      setArtMode: ServiceFunction<
        object,
        T,
        {
          // Name of the target entity @example media_player.tv
          entity_id: string;
        }
      >;
    };
    remote: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @example BedroomTV
          activity?: string;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 32756745
          device?: string;
          //  @example Play @constraints  object: multiple: false
          command: object;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          num_repeats?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          delay_secs?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          hold_secs?: number;
        }
      >;
      // undefined
      learnCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Turn on @constraints  object: multiple: false
          command?: object;
          //
          command_type?: 'ir' | 'rf';
          //  @constraints  boolean:
          alternative?: boolean;
          //  @constraints  number: min: 0, max: 60, step: 5, unit_of_measurement: seconds, mode: slider
          timeout?: number;
        }
      >;
      // undefined
      deleteCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Mute @constraints  object: multiple: false
          command: object;
        }
      >;
    };
    environmentCanada: {
      // undefined
      setRadarType: ServiceFunction<
        object,
        T,
        {
          //  @example Snow
          radar_type: 'Auto' | 'Rain' | 'Snow';
        }
      >;
      // undefined
      getForecasts: ServiceFunction<object, T, object>;
    };
    weather: {
      // undefined
      getForecasts: ServiceFunction<
        object,
        T,
        {
          //
          type: 'daily' | 'hourly' | 'twice_daily';
        }
      >;
    };
    todo: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      updateItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example Something else
          rename?: string;
          //  @example needs_action
          status?: 'needs_action' | 'completed';
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
        }
      >;
      // undefined
      getItems: ServiceFunction<
        object,
        T,
        {
          //  @example needs_action
          status?: 'needs_action' | 'completed';
        }
      >;
      // undefined
      removeCompletedItems: ServiceFunction<object, T, object>;
    };
    aiTask: {
      // undefined
      generateData: ServiceFunction<
        object,
        T,
        {
          //  @example home summary
          task_name: string;
          //  @example Generate a funny notification that the garage door was left open
          instructions: string;
          //
          entity_id?: string;
          //  @example { 'name': { 'selector': { 'text': }, 'description': 'Name of the user', 'required': 'True' } } }, 'age': { 'selector': { 'number': }, 'description': 'Age of the user' } } @constraints  object: multiple: false
          structure?: object;
          //  @constraints  media: accept: *, multiple: true
          attachments?: unknown;
        }
      >;
      // undefined
      generateImage: ServiceFunction<
        object,
        T,
        {
          //  @example picture of a dog
          task_name: string;
          //  @example Generate a high quality square image of a dog on transparent background
          instructions: string;
          //
          entity_id: string;
          //  @constraints  media: accept: *, multiple: true
          attachments?: unknown;
        }
      >;
    };
    bhyve: {
      // Enable rain delay for a zone
      enableRainDelay: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
          // Number of hours of rain delay @example 24
          hours?: object;
        }
      >;
      // Disable rain delay for a zone
      disableRainDelay: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
        }
      >;
      // Start watering a zone
      startWatering: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
          // Number of minutes to water the zone @example 15
          minutes?: object;
        }
      >;
      // Stop watering a zone
      stopWatering: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
        }
      >;
      // Set the manual preset runtime for a device entity
      setManualPresetRuntime: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
          // Number of minutes to set the preset runtime @example 15
          minutes?: object;
        }
      >;
      // Set the smart watering soil moisture level for a zone
      setSmartWateringSoilMoisture: ServiceFunction<
        object,
        T,
        {
          // Zone @example switch.backyard_zone
          entity_id?: object;
          // Moisture level between 0 - 100 (percent) @example 50
          percentage?: object;
        }
      >;
      // Begin watering a program
      startProgram: ServiceFunction<
        object,
        T,
        {
          // Program @example switch.front_yard_program
          entity_id?: object;
        }
      >;
    };
    calendar: {
      // undefined
      createEvent: ServiceFunction<
        object,
        T,
        {
          //  @example Department Party
          summary: string;
          //  @example Meeting to provide technical review for 'Phoenix' design.
          description?: string;
          //  @example 2022-03-22 20:00:00 @constraints  datetime:
          start_date_time?: string;
          //  @example 2022-03-22 22:00:00 @constraints  datetime:
          end_date_time?: string;
          //  @example 2022-03-22 @constraints  date:
          start_date?: string;
          //  @example 2022-03-23 @constraints  date:
          end_date?: string;
          //  @example {'days': 2} or {'weeks': 2}
          in?: object;
          //  @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
      // undefined
      getEvents: ServiceFunction<
        object,
        T,
        {
          //  @example 2022-03-22 20:00:00 @constraints  datetime:
          start_date_time?: string;
          //  @example 2022-03-22 22:00:00 @constraints  datetime:
          end_date_time?: string;
          //  @constraints  duration:
          duration?: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
    };
    wasteCollectionSchedule: {
      // Fetch data from all sources.
      fetchData: ServiceFunction<object, T, object>;
    };
    alarmControlPanel: {
      // undefined
      alarmDisarm: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmHome: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmAway: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmNight: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmVacation: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmCustomBypass: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmTrigger: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
    };
    humidifier: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      setMode: ServiceFunction<
        object,
        T,
        {
          //  @example away
          mode: string;
        }
      >;
      // undefined
      setHumidity: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          humidity: number;
        }
      >;
    };
    siren: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @example fire
          tone?: string;
          //  @example 0.5 @constraints  number: min: 0, max: 1, step: 0.05, mode: slider
          volume_level?: number;
          //  @example 15
          duration?: string;
        }
      >;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    openweathermap: {
      // undefined
      getMinuteForecast: ServiceFunction<object, T, object>;
    };
    kiaUvo: {
      // undefined
      update: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      forceUpdate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      lock: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      unlock: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @example 5 @constraints  number: min: 1, max: 30, step: 1, unit_of_measurement: minutes, mode: slider
          duration?: number;
          //  @constraints  boolean:
          climate: boolean;
          //  @example 21.5 @constraints  number: min: 16, max: 85, step: 0.5, mode: box, unit_of_measurement: Degrees
          temperature: number;
          //  @constraints  boolean:
          defrost?: boolean;
          //
          heating: '0' | '4' | '2' | '3';
          //  @example 1
          steering_wheel?: '0' | '1' | '2';
          //
          flseat?: '0' | '1' | '3' | '4' | '5' | '6' | '7' | '8';
          //
          frseat?: '0' | '1' | '3' | '4' | '5' | '6' | '7' | '8';
          //
          rlseat?: '0' | '1' | '3' | '4' | '5' | '6' | '7' | '8';
          //
          rrseat?: '0' | '1' | '3' | '4' | '5' | '6' | '7' | '8';
        }
      >;
      // undefined
      startCharge: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopCharge: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      setChargeLimits: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @example 50 @constraints  number: min: 50, max: 100, step: 10, unit_of_measurement: %, mode: slider
          dc_limit?: number;
          //  @example 50 @constraints  number: min: 50, max: 100, step: 10, unit_of_measurement: %, mode: slider
          ac_limit?: number;
        }
      >;
      // undefined
      setChargingCurrent: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //
          level: '1' | '2' | '3';
        }
      >;
      // Open Charge Port
      openChargePort: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      closeChargePort: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      scheduleChargingAndClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @constraints  boolean:
          charging_enabled?: boolean;
          //  @constraints  boolean:
          first_departure_enabled?: boolean;
          //  @example ['0', '1']
          first_departure_days?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
          //  @constraints  time:
          first_departure_time?: string;
          //  @constraints  boolean:
          second_departure_enabled?: boolean;
          //  @example ['0', '1']
          second_departure_days?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
          //  @constraints  time:
          second_departure_time?: string;
          //  @constraints  time:
          off_peak_start_time?: string;
          //  @constraints  time:
          off_peak_end_time?: string;
          //  @constraints  boolean:
          off_peak_charge_only_enabled?: boolean;
          //  @constraints  boolean:
          climate_enabled?: boolean;
          //  @example 21.5 @constraints  number: min: 17, max: 85, step: 0.5, mode: box, unit_of_measurement: Degrees
          temperature?: number;
          //  @example 0
          temperature_unit?: '0' | '1';
          //  @constraints  boolean:
          defrost?: boolean;
        }
      >;
      // undefined
      startHazardLights: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startHazardLightsAndHorn: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startValetMode: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopValetMode: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      setWindows: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //
          flwindow: '0' | '1' | '2';
          //
          frwindow: '0' | '1' | '2';
          //
          rrwindow: '0' | '1' | '2';
          //
          rlwindow: '0' | '1' | '2';
        }
      >;
    };
    esphome: {
      // Performs the action wipe_devices_from_gdo_memory of the node ratgdov25i-e5f7cc
      ratgdov25IE5F7CcWipeDevicesFromGdoMemory: ServiceFunction<
        object,
        T,
        {
          //  @example Example text
          devices_to_wipe: string;
        }
      >;
    };
    image: {
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/image_snapshot.jpg
          filename: string;
        }
      >;
    };
    bambuLab: {
      // Send an arbitrary gcode command to the 3D printer
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The command to send to the printer. Must have a trailing new line. @example M104 S200
          command: string;
        }
      >;
      // Print sliced 3MF file stored on the SD card
      printProjectFile: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // Filename on SD card @example cache/filename.3mf
          filepath: string;
          //  @constraints  number: mode: box, min: 1, max: 100, step: 1
          plate: number;
          //  @constraints  boolean:
          timelapse: boolean;
          //  @constraints  boolean:
          bed_leveling: boolean;
          //  @constraints  boolean:
          flow_cali: boolean;
          //  @constraints  boolean:
          vibration_cali: boolean;
          //  @constraints  boolean:
          layer_inspect: boolean;
          //  @constraints  boolean:
          use_ams: boolean;
          // https://community.home-assistant.io/t/bambu-lab-x1-x1c-mqtt/489510/738 @example 2,-1,0
          ams_mapping: string;
        }
      >;
      // Skip objects currently being printed
      skipObjects: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // Object IDs are available from printable objects entity attributes @example 409,1463
          objects: string;
        }
      >;
      // Move the printhead or bed
      moveAxis: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The axis to move. X/P/H printers, X and Y move the printhead, Z moves the bed. A1, X moves the printhead, Y the bed, Z moves the gantry. @example X
          axis: 'X' | 'Y' | 'Z' | 'Home';
          // The distance (in mm) to move the axis A negative distance moves Z up, X left, Y forward. @example 10 @constraints  number: min: -100, max: 100, step: 1, mode: slider
          distance?: number;
        }
      >;
      // Unload the filament currently loaded into the extruder
      unloadFilament: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
      // Load a new filament into the extruder passed an AMS tray or an External spool entity
      loadFilament: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          // Target nozzle temperature once the filament is loaded. By default uses the midpoint between min and max temperature of the chosen filament. @example 220 @constraints  number: min: 0, max: 250, step: 1, mode: slider
          temperature?: number;
        }
      >;
      // Perform an extrusion or extraction of the loaded filament
      extrudeRetract: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The type of extrude action to perform @example Extrude
          type: 'Extrude' | 'Retract';
          // Perform extrusion or retraction if nozzle temperature is below 170ºC. @constraints  boolean:
          force?: boolean;
        }
      >;
      // Sets filament details on an AMS tray or an External spool entity
      setFilament: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          // Bambu's filament ID. E.g. GFL96 is Generic PLA Silk @example GFL96
          tray_info_idx: string;
          // RGBA value for the color. E.g. FF0000FF is opaque red. @example FF0000FF
          tray_color: string;
          // Type of filament. E.g. 'PLA' or 'PETG' @example PLA
          tray_type: string;
          // The minimum temperature that it is recommended to print this filament at. @example 220 @constraints  number: min: 160, max: 300, step: 1, mode: slider
          nozzle_temp_min: number;
          // The maximum temperature that it is recommended to print this filament at. @example 220 @constraints  number: min: 160, max: 300, step: 1, mode: slider
          nozzle_temp_max: number;
        }
      >;
      // Gets a json string with details about all known filaments
      getFilamentData: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
      // Triggers the AMS to attempt to re-read the RFID tag on the current spool.
      readRfid: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
        }
      >;
      // Starts AMS filament drying.
      startFilamentDrying: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // AMS 2 max is 65C. AMS HT max is 85C. @example 45 @constraints  number: min: 45, max: 85, step: 1, mode: slider
          temp: number;
          //  @constraints  boolean:
          rotate_tray: boolean;
          //  @constraints  number: min: 1, max: 24, step: 1, mode: slider
          duration: number;
        }
      >;
      // Stops AMS filament drying.
      stopFilamentDrying: ServiceFunction<
        object,
        T,
        {
          // Select the AMS 2 or AMS HT device to stop drying on.
          device_id: string;
        }
      >;
    };
    automation: {
      // undefined
      trigger: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          skip_condition?: boolean;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          stop_actions?: boolean;
        }
      >;
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    zha: {
      // undefined
      permit: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 254, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee?: string;
          //  @example 00:0a:bf:00:01:10:23:35
          source_ieee?: string;
          //  @example 1234-5678-1234-5678-AABB-CCDD-AABB-CCDD-EEFF
          install_code?: string;
          //  @example Z:000D6FFFFED4163B$I:52797BF4A5084DAA8E1712B61741CA024051
          qr_code?: string;
        }
      >;
      // undefined
      remove: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
        }
      >;
      // undefined
      setZigbeeClusterAttribute: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 1, max: 65535, mode: box, step: 1
          endpoint_id: number;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: 'in' | 'out';
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          attribute: number;
          //  @example 1
          value: string;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      issueZigbeeClusterCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          endpoint_id: number;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: 'in' | 'out';
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          command: number;
          //
          command_type: 'client' | 'server';
          //  @example [arg1, arg2, argN] @constraints  object: multiple: false
          args?: object;
          //  @constraints  object: multiple: false
          params?: object;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      issueZigbeeGroupCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 546
          group: string;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: 'in' | 'out';
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          command: number;
          //  @example [arg1, arg2, argN] @constraints  object: multiple: false
          args?: object;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      warningDeviceSquawk: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          mode?: number;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          strobe?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          level?: number;
        }
      >;
      // undefined
      warningDeviceWarn: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 0, max: 6, mode: box, step: 1
          mode?: number;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          strobe?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          level?: number;
          //  @constraints  number: min: 0, max: 65535, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @constraints  number: min: 0, max: 100, step: 10, mode: slider
          duty_cycle?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          intensity?: number;
        }
      >;
      // undefined
      setLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
          //  @example 1234
          user_code: string;
        }
      >;
      // undefined
      enableLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
      // undefined
      disableLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
      // undefined
      clearLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | 'update.home_assistant_supervisor_update'
      | 'update.home_assistant_core_update'
      | 'update.studio_code_server_update'
      | 'update.advanced_ssh_web_terminal_update'
      | 'update.mosquitto_broker_update'
      | 'update.matter_server_update'
      | 'update.twingate_connector_update'
      | 'update.file_editor_update'
      | 'update.music_assistant_update'
      | 'update.glasshome_dashboard_update'
      | 'update.samba_share_update'
      | 'update.home_assistant_operating_system_update'
      | 'conversation.home_assistant'
      | 'event.backup_automatic_backup'
      | 'sensor.backup_backup_manager_state'
      | 'sensor.backup_next_scheduled_automatic_backup'
      | 'sensor.backup_last_successful_automatic_backup'
      | 'sensor.backup_last_attempted_automatic_backup'
      | 'sensor.dryer_run_time_in_last_40_min'
      | 'sensor.washer_run_time_in_last_40_min'
      | 'sensor.dolores_visits_today'
      | 'sensor.ozzy_visits_today'
      | 'sensor.ozzy_visits_this_month'
      | 'sensor.dolores_visits_this_month'
      | 'sensor.litter_time_today'
      | 'binary_sensor.remote_ui'
      | 'stt.home_assistant_cloud'
      | 'tts.home_assistant_cloud'
      | 'scene.new_scene'
      | 'scene.dark'
      | 'script.1752556674714'
      | 'script.washer_reminder_popup'
      | 'script.1753140070392'
      | 'script.trigger_feeder'
      | 'zone.work'
      | 'input_boolean.google_routine_trigger'
      | 'input_select.portion'
      | 'input_number.ozzy_litter_minutes'
      | 'input_number.dolores_litter_minutes'
      | 'zone.home'
      | 'person.jerry_medeiros'
      | 'counter.dolores_litter_visits'
      | 'counter.ozzy_litter_visits'
      | 'sun.sun'
      | 'sensor.sun_next_dawn'
      | 'sensor.sun_next_dusk'
      | 'sensor.sun_next_midnight'
      | 'sensor.sun_next_noon'
      | 'sensor.sun_next_rising'
      | 'sensor.sun_next_setting'
      | 'button.aqara_hub_m1s_gen_2_identify_2'
      | 'binary_sensor.aqara_door_and_window_sensor_door_3'
      | 'button.aqara_door_and_window_sensor_identify_3'
      | 'sensor.aqara_door_and_window_sensor_battery_3'
      | 'sensor.aqara_door_and_window_sensor_battery_voltage'
      | 'sensor.aqara_door_and_window_sensor_battery_type_3'
      | 'binary_sensor.aqara_door_and_window_sensor_door_4'
      | 'button.aqara_door_and_window_sensor_identify_4'
      | 'sensor.aqara_door_and_window_sensor_battery_4'
      | 'sensor.aqara_door_and_window_sensor_battery_voltage_2'
      | 'sensor.aqara_door_and_window_sensor_battery_type_4'
      | 'binary_sensor.aqara_door_and_window_sensor_door'
      | 'button.aqara_door_and_window_sensor_identify'
      | 'sensor.aqara_door_and_window_sensor_battery'
      | 'sensor.aqara_door_and_window_sensor_battery_voltage_3'
      | 'sensor.aqara_door_and_window_sensor_battery_type'
      | 'binary_sensor.dryer_running'
      | 'button.dryer_identify'
      | 'sensor.dryer_battery'
      | 'sensor.dryer_battery_voltage'
      | 'sensor.dryer_battery_type'
      | 'binary_sensor.washer_running'
      | 'button.washing_machine_identify'
      | 'sensor.washing_machine_battery'
      | 'sensor.washing_machine_battery_voltage'
      | 'sensor.washing_machine_battery_type'
      | 'button.aqara_wireless_mini_switch_identify'
      | 'event.aqara_wireless_mini_switch_button_2'
      | 'sensor.aqara_wireless_mini_switch_battery'
      | 'sensor.aqara_wireless_mini_switch_battery_voltage'
      | 'sensor.aqara_wireless_mini_switch_battery_type'
      | 'button.aqara_wireless_mini_switch_identify_2'
      | 'event.aqara_wireless_mini_switch_button'
      | 'sensor.aqara_wireless_mini_switch_battery_2'
      | 'sensor.aqara_wireless_mini_switch_battery_voltage_2'
      | 'sensor.aqara_wireless_mini_switch_battery_type_2'
      | 'button.hallway_switch_identify_2'
      | 'light.hallway_switch_2'
      | 'button.back_door_identify'
      | 'lock.back_door'
      | 'select.back_door_operating_mode_2'
      | 'sensor.back_door_battery'
      | 'sensor.back_door_battery_voltage'
      | 'sensor.back_door_battery_type'
      | 'button.front_door_identify'
      | 'lock.front_door'
      | 'select.front_door_operating_mode_2'
      | 'sensor.front_door_battery'
      | 'sensor.front_door_battery_voltage'
      | 'sensor.front_door_battery_type'
      | 'button.aqara_night_light_identify_2'
      | 'light.aqara_night_light_2'
      | 'number.aqara_night_light_on_level_2'
      | 'select.aqara_night_light_power_on_behavior_on_startup_2'
      | 'button.aqara_wall_switch_us_identify'
      | 'light.aqara_wall_switch_us'
      | 'button.nest_thermostat_identify'
      | 'climate.nest_thermostat'
      | 'sensor.nest_thermostat_temperature'
      | 'switch.nest_thermostat'
      | 'update.smart_wi_fi_switch_firmware'
      | 'light.smart_wi_fi_switch'
      | 'select.smart_wi_fi_switch_power_on_behavior_on_startup'
      | 'update.smart_wi_fi_switch_firmware_2'
      | 'light.smart_wi_fi_switch_2'
      | 'select.smart_wi_fi_switch_power_on_behavior_on_startup_2'
      | 'input_text.last_litter_cat'
      | 'input_datetime.litter_start_time'
      | 'camera.cats'
      | 'switch.google_routine_switch'
      | 'binary_sensor.litter_box_occupied'
      | 'sensor.bubble_card_modules'
      | 'media_player.tv'
      | 'binary_sensor.ipad_3_focus'
      | 'device_tracker.ipad_3'
      | 'sensor.ipad_3_activity'
      | 'sensor.ipad_3_connection_type'
      | 'sensor.ipad_3_geocoded_location'
      | 'sensor.ipad_3_last_update_trigger'
      | 'sensor.ipad_3_battery_level'
      | 'sensor.ipad_3_battery_state'
      | 'sensor.ipad_3_bssid'
      | 'sensor.ipad_3_ssid'
      | 'sensor.ipad_3_storage'
      | 'sensor.ipad_3_app_version'
      | 'sensor.ipad_3_location_permission'
      | 'sensor.ipad_3_audio_output'
      | 'binary_sensor.jerry_s_iphone_focus'
      | 'device_tracker.jerry_s_iphone'
      | 'sensor.jerry_s_iphone_distance'
      | 'sensor.jerry_s_iphone_activity'
      | 'sensor.jerry_s_iphone_floors_descended'
      | 'sensor.jerry_s_iphone_steps'
      | 'sensor.jerry_s_iphone_floors_ascended'
      | 'sensor.jerry_s_iphone_average_active_pace'
      | 'sensor.jerry_s_iphone_battery_level'
      | 'sensor.jerry_s_iphone_connection_type'
      | 'sensor.jerry_s_iphone_battery_state'
      | 'sensor.jerry_s_iphone_bssid'
      | 'sensor.jerry_s_iphone_storage'
      | 'sensor.jerry_s_iphone_ssid'
      | 'sensor.jerry_s_iphone_sim_1'
      | 'sensor.jerry_s_iphone_sim_2'
      | 'sensor.jerry_s_iphone_watch_battery_level'
      | 'sensor.jerry_s_iphone_last_update_trigger'
      | 'sensor.jerry_s_iphone_app_version'
      | 'sensor.jerry_s_iphone_location_permission'
      | 'sensor.jerry_s_iphone_audio_output'
      | 'sensor.jerry_s_iphone_watch_battery_state'
      | 'sensor.jerry_s_iphone_geocoded_location'
      | 'device_tracker.control_panel'
      | 'sensor.lenovo_cd_18781y_battery_level'
      | 'sensor.lenovo_cd_18781y_battery_state'
      | 'sensor.lenovo_cd_18781y_charger_type'
      | 'sensor.calgary_current_condition'
      | 'sensor.calgary_dew_point'
      | 'sensor.calgary_high_temperature'
      | 'sensor.calgary_humidex'
      | 'sensor.calgary_humidity'
      | 'sensor.calgary_icon_code'
      | 'sensor.calgary_low_temperature'
      | 'sensor.calgary_normal_high_temperature'
      | 'sensor.calgary_normal_low_temperature'
      | 'sensor.calgary_chance_of_precipitation'
      | 'sensor.calgary_barometric_pressure'
      | 'sensor.calgary_temperature'
      | 'sensor.calgary_tendency'
      | 'sensor.calgary_summary'
      | 'sensor.calgary_observation_time'
      | 'sensor.calgary_uv_index'
      | 'sensor.calgary_visibility'
      | 'sensor.calgary_wind_bearing'
      | 'sensor.calgary_wind_chill'
      | 'sensor.calgary_wind_direction'
      | 'sensor.calgary_wind_gust'
      | 'sensor.calgary_wind_speed'
      | 'sensor.calgary_advisories'
      | 'sensor.calgary_endings'
      | 'sensor.calgary_statements'
      | 'sensor.calgary_warnings'
      | 'sensor.calgary_watches'
      | 'sensor.calgary_aqhi'
      | 'weather.calgary_forecast'
      | 'sensor.jq01009g24410010174_cat_litter_level'
      | 'sensor.jq01009g24410010174_last_usage'
      | 'sensor.litter_box_device_status'
      | 'sensor.jq01009g24410010174_cat_litter_state'
      | 'sensor.jq01009g24410010174_bin_state'
      | 'sensor.jq01009g24410010174_cat_dolores'
      | 'sensor.jq01009g24410010174_cat_ozzy'
      | 'binary_sensor.jq01009g24410010174_garbage_can_full'
      | 'switch.jq01009g24410010174_auto_clean'
      | 'switch.jq01009g24410010174_child_lock'
      | 'switch.jq01009g24410010174_automatic_cover'
      | 'switch.jq01009g24410010174_automatic_leveling'
      | 'switch.jq01009g24410010174_silent_mode'
      | 'switch.jq01009g24410010174_unstoppable_cycle'
      | 'button.jq01009g24410010174_clean'
      | 'button.jq01009g24410010174_level'
      | 'todo.shopping_list'
      | 'ai_task.google_ai_task_2'
      | 'conversation.google_ai_conversation'
      | 'stt.google_ai_stt'
      | 'tts.google_ai_tts'
      | 'tts.google_en_com'
      | 'sensor.smart_hose_state'
      | 'sensor.unnamed_zone_zone_history'
      | 'sensor.unnamed_zone_zone_history_2'
      | 'sensor.smart_hose_battery_level'
      | 'switch.smart_hose_rain_delay'
      | 'switch.unnamed_zone_zone'
      | 'switch.unnamed_zone_zone_2'
      | 'update.button_card_update'
      | 'update.vehicle_status_card_update'
      | 'update.waste_collection_schedule_update'
      | 'update.samsungtv_smart_update'
      | 'update.meross_integration_update'
      | 'update.hacs_update'
      | 'update.bubble_card_update'
      | 'update.vertical_stack_in_card_update'
      | 'update.astroweather_card_update'
      | 'update.ui_lovelace_minimalist_update'
      | 'update.card_mod_update'
      | 'update.astroweather_update'
      | 'update.advanced_camera_card_update'
      | 'update.browser_mod_update'
      | 'update.spotcast_update'
      | 'update.tv_remote_card_with_touchpad_and_haptic_feedback_update'
      | 'update.orbit_bhyve_update'
      | 'update.mini_graph_card_update'
      | 'update.spotifyplus_card_update'
      | 'update.bambu_lab_update'
      | 'update.mushroom_update'
      | 'update.music_assistant_jukebox_update'
      | 'update.spotifyplus_update'
      | 'update.firemote_card_update'
      | 'update.layout_card_update'
      | 'update.custom_sidebar_update'
      | 'update.spotify_lovelace_card_update'
      | 'update.dwains_dashboard_update'
      | 'update.kia_uvo_hyundai_bluelink_update'
      | 'update.neakasa_update'
      | 'update.slider_button_card_update'
      | 'media_player.tv_2'
      | 'sensor.dwains_dashboard_latest_version'
      | 'calendar.black_cart_2'
      | 'calendar.blue_cart_2'
      | 'calendar.green_cart_2'
      | 'calendar.calgary_ab_2'
      | 'sensor.days_to_black_cart_2'
      | 'sensor.days_to_green_cart_2'
      | 'sensor.days_to_blue_cart_2'
      | 'sensor.collection_types_2'
      | 'sensor.upcoming_waste_collection_2'
      | 'weather.forecast_home'
      | 'binary_sensor.arris_tg4482a_wan_status'
      | 'sensor.arris_tg4482a_external_ip'
      | 'sensor.arris_tg4482a_download_speed'
      | 'sensor.arris_tg4482a_upload_speed'
      | 'binary_sensor.rpi_power_status'
      | 'light.hs01_smart_strip_lights'
      | 'light.backyard'
      | 'light.backyard_2'
      | 'number.smart_feeder_feed'
      | 'number.smart_feeder_voice_times'
      | 'select.merkury_six_smart_plug_power_on_behavior'
      | 'select.smart_switch_power_on_behavior'
      | 'select.smart_switch_indicator_light_mode'
      | 'switch.office_left_monitor_plug'
      | 'switch.office_right_monitor_plug'
      | 'switch.office_computer_plug'
      | 'switch.merkury_six_smart_plug_socket_4'
      | 'switch.merkury_six_smart_plug_socket_5'
      | 'switch.merkury_six_smart_plug_socket_6'
      | 'switch.all_sky_plug'
      | 'switch.humidifier_socket_1'
      | 'switch.smart_feeder_slow_feed'
      | 'switch.smart_switch_switch_1'
      | 'scene.normal'
      | 'scene.astronomy'
      | 'media_player.living_room_tv'
      | 'media_player.basement_tv'
      | 'media_player.bedroom_speaker'
      | 'media_player.living_room_speaker'
      | 'media_player.everywhere'
      | 'media_player.office_speaker'
      | 'remote.tv'
      | 'media_player.living_room_tv_2'
      | 'remote.living_room_tv'
      | 'media_player.basement_tv_2'
      | 'remote.basement_tv'
      | 'sensor.openweathermap_weather'
      | 'sensor.openweathermap_dew_point_temperature'
      | 'sensor.openweathermap_temperature'
      | 'sensor.openweathermap_apparent_temperature'
      | 'sensor.openweathermap_wind_speed'
      | 'sensor.openweathermap_wind_gust_speed'
      | 'sensor.openweathermap_wind_direction'
      | 'sensor.openweathermap_humidity'
      | 'sensor.openweathermap_pressure'
      | 'sensor.openweathermap_cloud_coverage'
      | 'sensor.openweathermap_rain_intensity'
      | 'sensor.openweathermap_snow_intensity'
      | 'sensor.openweathermap_precipitation_kind'
      | 'sensor.openweathermap_uv_index'
      | 'sensor.openweathermap_visibility'
      | 'sensor.openweathermap_condition'
      | 'sensor.openweathermap_weather_code'
      | 'weather.openweathermap'
      | 'binary_sensor.astroweather_backyard_deep_sky_view'
      | 'binary_sensor.astroweather_backyard_moon_rises_during_darkness'
      | 'binary_sensor.astroweather_backyard_moon_sets_during_darkness'
      | 'binary_sensor.astroweather_backyard_moon_always_up_during_darkness'
      | 'binary_sensor.astroweather_backyard_moon_always_down_during_darkness'
      | 'sensor.astroweather_backyard_forecast_length'
      | 'sensor.astroweather_backyard_location_name'
      | 'sensor.astroweather_backyard_latitude'
      | 'sensor.astroweather_backyard_longitude'
      | 'sensor.astroweather_backyard_elevation'
      | 'sensor.astroweather_backyard_time_shift'
      | 'sensor.astroweather_backyard_timestamp'
      | 'sensor.astroweather_backyard_cloud_cover'
      | 'sensor.astroweather_backyard_cloudless'
      | 'sensor.astroweather_backyard_clouds_area'
      | 'sensor.astroweather_backyard_clouds_area_high'
      | 'sensor.astroweather_backyard_clouds_area_medium'
      | 'sensor.astroweather_backyard_clouds_area_low'
      | 'sensor.astroweather_backyard_fog_area'
      | 'sensor.astroweather_backyard_fog_2m_area'
      | 'sensor.astroweather_backyard_seeing_percentage'
      | 'sensor.astroweather_backyard_seeing'
      | 'sensor.astroweather_backyard_transparency'
      | 'sensor.astroweather_backyard_transparency_plain'
      | 'sensor.astroweather_backyard_lifted_index'
      | 'sensor.astroweather_backyard_lifted_index_plain'
      | 'sensor.astroweather_backyard_2m_relative_humidity'
      | 'sensor.astroweather_backyard_calm_percentage'
      | 'sensor.astroweather_backyard_10m_wind_direction'
      | 'sensor.astroweather_backyard_10m_wind_speed'
      | 'sensor.astroweather_backyard_2m_temperature'
      | 'sensor.astroweather_backyard_2m_dewpoint'
      | 'sensor.astroweather_backyard_precipitation_amount'
      | 'sensor.astroweather_backyard_condition'
      | 'sensor.astroweather_backyard_sun_altitude'
      | 'sensor.astroweather_backyard_sun_azimuth'
      | 'sensor.astroweather_backyard_sun_next_setting'
      | 'sensor.astroweather_backyard_sun_next_setting_nautical'
      | 'sensor.astroweather_backyard_sun_next_setting_astronomical'
      | 'sensor.astroweather_backyard_sun_next_rising'
      | 'sensor.astroweather_backyard_sun_next_rising_nautical'
      | 'sensor.astroweather_backyard_sun_next_rising_astronomical'
      | 'sensor.astroweather_backyard_sun_constellation'
      | 'sensor.astroweather_backyard_moon_next_rising'
      | 'sensor.astroweather_backyard_moon_next_setting'
      | 'sensor.astroweather_backyard_moon_phase'
      | 'sensor.astroweather_backyard_moon_icon'
      | 'sensor.astroweather_backyard_moon_next_new_moon'
      | 'sensor.astroweather_backyard_moon_next_full_moon'
      | 'sensor.astroweather_backyard_moon_altitude'
      | 'sensor.astroweather_backyard_moon_azimuth'
      | 'sensor.astroweather_backyard_moon_distance'
      | 'sensor.astroweather_backyard_moon_relative_distance'
      | 'sensor.astroweather_backyard_moon_angular_size'
      | 'sensor.astroweather_backyard_moon_relative_size'
      | 'sensor.astroweather_backyard_moon_constellation'
      | 'sensor.astroweather_backyard_moon_next_dark_night'
      | 'sensor.astroweather_backyard_astronomical_night_duration'
      | 'sensor.astroweather_backyard_deep_sky_darkness'
      | 'sensor.astroweather_backyard_deepsky_forecast_today'
      | 'sensor.astroweather_backyard_deepsky_forecast_today_plain'
      | 'sensor.astroweather_backyard_deepsky_forecast_today_description'
      | 'sensor.astroweather_backyard_deepsky_forecast_tomorrow'
      | 'sensor.astroweather_backyard_deepsky_forecast_tomorrow_plain'
      | 'sensor.astroweather_backyard_deepsky_forecast_tomorrow_description'
      | 'sensor.astroweather_backyard_uptonight'
      | 'weather.astroweather_backyard'
      | 'binary_sensor.sorento_engine_2'
      | 'binary_sensor.sorento_defrost_2'
      | 'binary_sensor.sorento_back_window_heater'
      | 'binary_sensor.sorento_front_left_door_2'
      | 'binary_sensor.sorento_front_right_door_2'
      | 'binary_sensor.sorento_back_left_door_2'
      | 'binary_sensor.sorento_back_right_door_2'
      | 'binary_sensor.sorento_trunk_2'
      | 'binary_sensor.sorento_hood_2'
      | 'binary_sensor.sorento_fuel_low_level_2'
      | 'binary_sensor.sorento_tire_pressure_all_2'
      | 'binary_sensor.sorento_tire_pressure_rear_left_2'
      | 'binary_sensor.sorento_tire_pressure_front_left_2'
      | 'binary_sensor.sorento_tire_pressure_front_right_2'
      | 'binary_sensor.sorento_tire_pressure_rear_right_2'
      | 'binary_sensor.sorento_air_conditioner_2'
      | 'binary_sensor.sorento_uma_ex_v6_premium_accessory'
      | 'binary_sensor.sorento_uma_ex_v6_premium_remote_ignition'
      | 'binary_sensor.sorento_uma_ex_v6_premium_transmission_condition'
      | 'binary_sensor.sorento_uma_ex_v6_premium_locked'
      | 'sensor.sorento_odometer_2'
      | 'sensor.sorento_last_service_2'
      | 'sensor.sorento_next_service_2'
      | 'sensor.sorento_car_battery_level_2'
      | 'sensor.sorento_last_updated_at_2'
      | 'sensor.sorento_fuel_driving_range'
      | 'sensor.sorento_set_temperature_2'
      | 'sensor.sorento_dtc_count_2'
      | 'sensor.sorento_vehicle_identification_number'
      | 'sensor.sorento_data_2'
      | 'device_tracker.sorento_location_2'
      | 'lock.sorento_door_lock_2'
      | 'binary_sensor.basement_bedroom_cloud_connection'
      | 'light.basement_bedroom'
      | 'sensor.basement_bedroom_signal_strength'
      | 'switch.basement_bedroom_led'
      | 'binary_sensor.staircase_light_cloud_connection'
      | 'light.staircase_light'
      | 'switch.staircase_light_led'
      | 'binary_sensor.living_room_light_cloud_connection'
      | 'light.living_room_light'
      | 'switch.living_room_light_led'
      | 'binary_sensor.basement_2_cloud_connection'
      | 'light.basement_2'
      | 'switch.basement_2_led'
      | 'binary_sensor.basement_1_cloud_connection'
      | 'light.basement_1'
      | 'switch.basement_1_led'
      | 'binary_sensor.kitchen_light_cloud_connection'
      | 'light.kitchen_light'
      | 'switch.kitchen_light_led'
      | 'binary_sensor.island_light_cloud_connection'
      | 'light.island_light'
      | 'switch.island_light_led'
      | 'binary_sensor.unnamed_s505_cloud_connection'
      | 'binary_sensor.unnamed_s505_overheated'
      | 'number.unnamed_s505_turn_off_in'
      | 'sensor.unnamed_s505_signal_level'
      | 'sensor.unnamed_s505_auto_off_at'
      | 'switch.unnamed_s505'
      | 'switch.unnamed_s505_auto_off_enabled'
      | 'switch.unnamed_s505_auto_update_enabled'
      | 'switch.unnamed_s505_led'
      | 'binary_sensor.unnamed_s505_cloud_connection_2'
      | 'binary_sensor.unnamed_s505_overheated_2'
      | 'number.unnamed_s505_turn_off_in_2'
      | 'sensor.unnamed_s505_signal_level_2'
      | 'sensor.unnamed_s505_auto_off_at_2'
      | 'switch.unnamed_s505_2'
      | 'switch.unnamed_s505_auto_off_enabled_2'
      | 'switch.unnamed_s505_auto_update_enabled_2'
      | 'switch.unnamed_s505_led_2'
      | 'binary_sensor.nas_security_status'
      | 'binary_sensor.nas_drive_2_exceeded_max_bad_sectors'
      | 'binary_sensor.nas_drive_2_below_min_remaining_life'
      | 'binary_sensor.nas_drive_1_exceeded_max_bad_sectors'
      | 'binary_sensor.nas_drive_1_below_min_remaining_life'
      | 'binary_sensor.nas_drive_3_exceeded_max_bad_sectors'
      | 'binary_sensor.nas_drive_3_below_min_remaining_life'
      | 'binary_sensor.nas_drive_4_exceeded_max_bad_sectors'
      | 'binary_sensor.nas_drive_4_below_min_remaining_life'
      | 'button.nas_reboot'
      | 'button.nas_shutdown'
      | 'camera.front_door_2'
      | 'camera.back_door_2'
      | 'sensor.nas_cpu_utilization_user'
      | 'sensor.nas_cpu_utilization_total'
      | 'sensor.nas_cpu_load_average_5_min'
      | 'sensor.nas_cpu_load_average_15_min'
      | 'sensor.nas_memory_usage_real'
      | 'sensor.nas_memory_available_swap'
      | 'sensor.nas_memory_available_real'
      | 'sensor.nas_memory_total_swap'
      | 'sensor.nas_memory_total_real'
      | 'sensor.nas_upload_throughput'
      | 'sensor.nas_download_throughput'
      | 'sensor.nas_volume_1_status'
      | 'sensor.nas_volume_1_used_space'
      | 'sensor.nas_volume_1_volume_used'
      | 'sensor.nas_volume_1_average_disk_temp'
      | 'sensor.nas_drive_2_status'
      | 'sensor.nas_drive_2_temperature'
      | 'sensor.nas_drive_1_status'
      | 'sensor.nas_drive_1_temperature'
      | 'sensor.nas_drive_3_status'
      | 'sensor.nas_drive_3_temperature'
      | 'sensor.nas_drive_4_status'
      | 'sensor.nas_drive_4_temperature'
      | 'sensor.nas_temperature'
      | 'switch.nas_surveillance_station_home_mode'
      | 'update.nas_dsm_update'
      | 'binary_sensor.reolink_video_doorbell_wifi_motion'
      | 'binary_sensor.reolink_video_doorbell_wifi_person'
      | 'binary_sensor.reolink_video_doorbell_wifi_vehicle'
      | 'binary_sensor.reolink_video_doorbell_wifi_pet'
      | 'binary_sensor.reolink_video_doorbell_wifi_visitor'
      | 'binary_sensor.front_yard_motion'
      | 'binary_sensor.front_yard_person'
      | 'binary_sensor.front_yard_vehicle'
      | 'binary_sensor.front_yard_animal'
      | 'binary_sensor.front_yard_sleep_status'
      | 'binary_sensor.back_door_motion'
      | 'binary_sensor.back_door_person'
      | 'binary_sensor.back_door_vehicle'
      | 'binary_sensor.back_door_pet'
      | 'binary_sensor.back_door_visitor'
      | 'binary_sensor.back_yard_motion'
      | 'binary_sensor.back_yard_person'
      | 'binary_sensor.back_yard_vehicle'
      | 'binary_sensor.back_yard_animal'
      | 'binary_sensor.back_yard_sleep_status'
      | 'camera.reolink_video_doorbell_wifi_fluent'
      | 'camera.front_yard_fluent'
      | 'camera.back_door_fluent'
      | 'camera.back_yard_fluent'
      | 'light.front_yard_floodlight'
      | 'light.back_yard_floodlight'
      | 'light.front_yard_status_led'
      | 'light.back_yard_status_led'
      | 'light.cameras_status_led'
      | 'number.front_yard_floodlight_turn_on_brightness'
      | 'number.back_yard_floodlight_turn_on_brightness'
      | 'number.reolink_video_doorbell_wifi_volume'
      | 'number.front_yard_volume'
      | 'number.back_door_volume'
      | 'number.back_yard_volume'
      | 'number.front_door_speak_volume'
      | 'number.back_door_speak_volume'
      | 'number.front_door_doorbell_volume'
      | 'number.back_door_doorbell_volume'
      | 'number.reolink_video_doorbell_wifi_motion_sensitivity'
      | 'number.back_door_motion_sensitivity'
      | 'number.front_yard_pir_sensitivity'
      | 'number.back_yard_pir_sensitivity'
      | 'number.reolink_video_doorbell_wifi_ai_person_sensitivity'
      | 'number.front_yard_ai_person_sensitivity'
      | 'number.back_door_ai_person_sensitivity'
      | 'number.back_yard_ai_person_sensitivity'
      | 'number.reolink_video_doorbell_wifi_ai_vehicle_sensitivity'
      | 'number.front_yard_ai_vehicle_sensitivity'
      | 'number.back_door_ai_vehicle_sensitivity'
      | 'number.back_yard_ai_vehicle_sensitivity'
      | 'number.reolink_video_doorbell_wifi_ai_pet_sensitivity'
      | 'number.back_door_ai_pet_sensitivity'
      | 'number.front_yard_ai_animal_sensitivity'
      | 'number.back_yard_ai_animal_sensitivity'
      | 'number.reolink_video_doorbell_wifi_auto_quick_reply_time'
      | 'number.back_door_auto_quick_reply_time'
      | 'number.cameras_alarm_volume'
      | 'number.cameras_message_volume'
      | 'number.reolink_chime_volume'
      | 'number.reolink_chime_silent_time'
      | 'select.front_yard_floodlight_mode'
      | 'select.back_yard_floodlight_mode'
      | 'select.reolink_video_doorbell_wifi_day_night_mode'
      | 'select.front_yard_day_night_mode'
      | 'select.back_door_day_night_mode'
      | 'select.back_yard_day_night_mode'
      | 'select.reolink_video_doorbell_wifi_play_quick_reply_message'
      | 'select.back_door_play_quick_reply_message'
      | 'select.reolink_video_doorbell_wifi_auto_quick_reply_message'
      | 'select.back_door_auto_quick_reply_message'
      | 'select.reolink_video_doorbell_wifi_hub_alarm_ringtone'
      | 'select.front_yard_hub_alarm_ringtone'
      | 'select.back_door_hub_alarm_ringtone'
      | 'select.back_yard_hub_alarm_ringtone'
      | 'select.reolink_video_doorbell_wifi_hub_visitor_ringtone'
      | 'select.back_door_hub_visitor_ringtone'
      | 'select.reolink_video_doorbell_wifi_doorbell_led'
      | 'select.back_door_doorbell_led'
      | 'select.cameras_scene_mode'
      | 'select.reolink_chime_motion_ringtone'
      | 'select.reolink_chime_person_ringtone'
      | 'select.reolink_chime_vehicle_ringtone'
      | 'select.reolink_chime_visitor_ringtone'
      | 'select.chime_pet_ringtone'
      | 'sensor.front_yard_battery'
      | 'sensor.back_yard_battery'
      | 'sensor.reolink_video_doorbell_wifi_day_night_state'
      | 'sensor.back_door_day_night_state'
      | 'siren.reolink_video_doorbell_wifi_siren'
      | 'siren.front_yard_siren'
      | 'siren.back_door_siren'
      | 'siren.back_yard_siren'
      | 'siren.cameras_siren'
      | 'switch.reolink_video_doorbell_wifi_infrared_lights_in_night_mode'
      | 'switch.front_yard_infrared_lights_in_night_mode'
      | 'switch.back_door_infrared_lights_in_night_mode'
      | 'switch.back_yard_infrared_lights_in_night_mode'
      | 'switch.reolink_video_doorbell_wifi_record_audio'
      | 'switch.front_yard_record_audio'
      | 'switch.back_door_record_audio'
      | 'switch.back_yard_record_audio'
      | 'switch.reolink_video_doorbell_wifi_siren_on_event'
      | 'switch.front_yard_siren_on_event'
      | 'switch.back_door_siren_on_event'
      | 'switch.back_yard_siren_on_event'
      | 'switch.reolink_video_doorbell_wifi_email_on_event'
      | 'switch.front_yard_email_on_event'
      | 'switch.back_door_email_on_event'
      | 'switch.back_yard_email_on_event'
      | 'switch.reolink_video_doorbell_wifi_ftp_upload'
      | 'switch.front_yard_ftp_upload'
      | 'switch.back_door_ftp_upload'
      | 'switch.back_yard_ftp_upload'
      | 'switch.reolink_video_doorbell_wifi_push_notifications'
      | 'switch.front_yard_push_notifications'
      | 'switch.back_door_push_notifications'
      | 'switch.back_yard_push_notifications'
      | 'switch.reolink_video_doorbell_wifi_record'
      | 'switch.front_yard_record'
      | 'switch.back_door_record'
      | 'switch.back_yard_record'
      | 'switch.reolink_video_doorbell_wifi_manual_record'
      | 'switch.front_yard_manual_record'
      | 'switch.back_door_manual_record'
      | 'switch.back_yard_manual_record'
      | 'switch.reolink_video_doorbell_wifi_hub_ringtone_on_event'
      | 'switch.front_yard_hub_ringtone_on_event'
      | 'switch.back_door_hub_ringtone_on_event'
      | 'switch.back_yard_hub_ringtone_on_event'
      | 'switch.reolink_video_doorbell_wifi_doorbell_button_sound'
      | 'switch.back_door_doorbell_button_sound'
      | 'switch.reolink_video_doorbell_wifi_privacy_mode'
      | 'switch.back_door_privacy_mode'
      | 'switch.reolink_chime_led'
      | 'update.reolink_video_doorbell_wifi_firmware'
      | 'update.front_yard_firmware'
      | 'update.back_door_firmware'
      | 'update.back_yard_firmware'
      | 'update.cameras_firmware'
      | 'button.ratgdov25i_e5f7cc_restart'
      | 'button.ratgdov25i_e5f7cc_safe_mode_boot'
      | 'button.ratgdov25i_e5f7cc_query_status'
      | 'button.ratgdov25i_e5f7cc_query_openings'
      | 'button.ratgdov25i_e5f7cc_sync'
      | 'button.ratgdov25i_e5f7cc_toggle_door'
      | 'number.ratgdov25i_e5f7cc_rolling_code_counter'
      | 'number.ratgdov25i_e5f7cc_opening_duration'
      | 'number.ratgdov25i_e5f7cc_closing_duration'
      | 'number.ratgdov25i_e5f7cc_client_id'
      | 'switch.ratgdov25i_e5f7cc_learn'
      | 'lock.ratgdov25i_e5f7cc_lock_remotes'
      | 'sensor.ratgdov25i_e5f7cc_openings'
      | 'sensor.ratgdov25i_e5f7cc_paired_devices'
      | 'sensor.ratgdov25i_e5f7cc_firmware_version'
      | 'binary_sensor.ratgdov25i_e5f7cc_motion'
      | 'binary_sensor.ratgdov25i_e5f7cc_obstruction'
      | 'binary_sensor.ratgdov25i_e5f7cc_button'
      | 'binary_sensor.ratgdov25i_e5f7cc_motor'
      | 'binary_sensor.ratgdov25i_e5f7cc_dry_contact_open'
      | 'binary_sensor.ratgdov25i_e5f7cc_dry_contact_close'
      | 'binary_sensor.ratgdov25i_e5f7cc_dry_contact_light'
      | 'cover.garage_door'
      | 'light.ratgdov25i_e5f7cc_light'
      | 'switch.music_assistant_jukebox_jukebox_queue'
      | 'switch.music_assistant_jukebox_jukebox_allow_access'
      | 'switch.music_assistant_jukebox_jukebox_play_music_on_start'
      | 'number.music_assistant_jukebox_jukebox_queue_length'
      | 'number.music_assistant_jukebox_jukebox_queuing_delay'
      | 'image.music_assistant_jukebox_internal_access_qr_code'
      | 'image.music_assistant_jukebox_external_access_qr_code'
      | 'switch.back_yard_mss620_main_channel'
      | 'switch.back_yard_mss620_switch_1'
      | 'switch.back_yard_mss620_switch_2'
      | 'switch.back_yard_mss620_do_not_disturb'
      | 'binary_sensor.astrolive_gti_at_home'
      | 'binary_sensor.astrolive_gti_at_park'
      | 'binary_sensor.astrolive_gti_slewing'
      | 'binary_sensor.astrolive_focuser_is_moving'
      | 'binary_sensor.indi_allsky_moon_mode'
      | 'binary_sensor.indi_allsky_night'
      | 'camera.astrolive_zwo_zwo'
      | 'image.indi_allsky_indi_allsky_camera'
      | 'media_player.spotify_jerry_medeiros'
      | 'sensor.astrolive_zwo_image_type'
      | 'sensor.astrolive_zwo_exposure_duration'
      | 'sensor.astrolive_zwo_time_of_observation'
      | 'sensor.astrolive_zwo_x_axis_binning'
      | 'sensor.astrolive_zwo_y_axis_binning'
      | 'sensor.astrolive_zwo_gain'
      | 'sensor.astrolive_zwo_offset'
      | 'sensor.astrolive_zwo_pixel_x_axis_size'
      | 'sensor.astrolive_zwo_pixel_y_axis_size'
      | 'sensor.astrolive_zwo_imaging_instrument'
      | 'sensor.astrolive_zwo_ccd_temperature'
      | 'sensor.astrolive_zwo_filter'
      | 'sensor.smart_series_6000_aae8_time'
      | 'sensor.smart_series_6000_aae8_sector'
      | 'sensor.smart_series_6000_aae8_number_of_sectors'
      | 'sensor.smart_series_6000_aae8_toothbrush_state'
      | 'sensor.smart_series_6000_aae8_pressure'
      | 'sensor.smart_series_6000_aae8_mode'
      | 'sensor.smart_series_6000_aae8_battery'
      | 'sensor.astrolive_zwo_sensor_readout_mode'
      | 'sensor.io_series_6_7_44fc_duration'
      | 'sensor.io_series_6_7_44fc_sector'
      | 'sensor.io_series_6_7_44fc_number_of_sectors'
      | 'sensor.io_series_6_7_44fc'
      | 'sensor.io_series_6_7_44fc_pressure'
      | 'sensor.io_series_6_7_44fc_brushing_mode'
      | 'sensor.io_series_6_7_44fc_battery'
      | 'sensor.astrolive_zwo_sensor_bayer_pattern'
      | 'sensor.astrolive_zwo_telescope'
      | 'sensor.astrolive_zwo_focal_length'
      | 'sensor.astrolive_zwo_ra_of_telescope'
      | 'sensor.astrolive_zwo_declination_of_telescope'
      | 'sensor.astrolive_zwo_altitude_of_telescope'
      | 'sensor.astrolive_zwo_azimuth_of_telescope'
      | 'sensor.astrolive_zwo_object_of_interest'
      | 'sensor.astrolive_zwo_ra_of_imaged_object'
      | 'sensor.astrolive_zwo_declination_of_imaged_object'
      | 'sensor.astrolive_zwo_rotation_of_imaged_object'
      | 'sensor.astrolive_zwo_software'
      | 'sensor.astrolive_gti_altitude'
      | 'sensor.astrolive_gti_azimuth'
      | 'sensor.astrolive_gti_declination'
      | 'sensor.astrolive_gti_declination_rate'
      | 'sensor.astrolive_gti_guiderate_declination'
      | 'sensor.astrolive_gti_right_ascension'
      | 'sensor.astrolive_gti_right_ascension_rate'
      | 'sensor.astrolive_gti_guiderate_right_ascension'
      | 'sensor.astrolive_gti_side_of_pier'
      | 'sensor.astrolive_gti_site_elevation'
      | 'sensor.astrolive_gti_site_latitude'
      | 'sensor.astrolive_gti_site_longitude'
      | 'sensor.astrolive_focuser_position'
      | 'sensor.astrolive_efw_names'
      | 'sensor.astrolive_efw_position'
      | 'sensor.astrolive_efw_current'
      | 'sensor.astrolive_astrobox_max_switch'
      | 'sensor.astrolive_astrobox_switch_value_0'
      | 'sensor.astrolive_astrobox_switch_value_1'
      | 'sensor.astrolive_astrobox_switch_value_2'
      | 'sensor.astrolive_astrobox_switch_value_3'
      | 'automation.notify_garage_door_is_open'
      | 'automation.waste_collection_popup_at_7pm'
      | 'automation.notify_dismiss_waste_popup_next_day'
      | 'automation.notify_when_washer_finishes_history_stats'
      | 'automation.dryer_finished_running'
      | 'automation.aqara_mini_switch_single_press'
      | 'automation.turn_on_lights_in_the_office'
      | 'automation.turn_off_office'
      | 'automation.turn_off_office_light'
      | 'automation.start_office'
      | 'automation.turn_on_back_entrance_light'
      | 'automation.turn_off_backyard_entrance'
      | 'automation.turn_on_front_entrance'
      | 'automation.turn_off_front_entrance'
      | 'automation.litter_box_identity_duration_tracker'
      | 'sensor.astrolive_astrobox_switch_value_4'
      | 'sensor.astrolive_astrobox_switch_value_5'
      | 'sensor.astrolive_astrobox_switch_value_6'
      | 'sensor.astrolive_astrobox_switch_value_7'
      | 'sensor.indi_allsky_exposure_date'
      | 'sensor.indi_allsky_exposure'
      | 'sensor.indi_allsky_camera_gain'
      | 'sensor.indi_allsky_camera_binmode'
      | 'sensor.indi_allsky_camera_temp'
      | 'sensor.indi_allsky_sun_altitude'
      | 'sensor.indi_allsky_moon_altitude'
      | 'sensor.indi_allsky_moon_phase'
      | 'sensor.indi_allsky_sqm'
      | 'sensor.indi_allsky_stars'
      | 'sensor.indi_allsky_detections'
      | 'sensor.indi_allsky_latitude'
      | 'sensor.indi_allsky_longitude'
      | 'sensor.indi_allsky_elevation'
      | 'sensor.indi_allsky_k_p_index'
      | 'sensor.indi_allsky_aurora_prediction'
      | 'sensor.indi_allsky_solar_wind_bt_nt'
      | 'sensor.indi_allsky_solar_wind_bz'
      | 'sensor.indi_allsky_solar_wind_plasma_density_1_cm3'
      | 'sensor.indi_allsky_solar_wind_plasma_speed_km_s'
      | 'sensor.indi_allsky_solar_wind_plasma_temperature_k'
      | 'sensor.indi_allsky_hemispheric_power_northern_gw'
      | 'sensor.indi_allsky_hemispheric_power_southern_gw'
      | 'sensor.indi_allsky_smoke_rating'
      | 'sensor.indi_allsky_sidereal_time'
      | 'sensor.indi_allsky_cpu_total'
      | 'sensor.indi_allsky_memory_total'
      | 'sensor.indi_allsky_filesystem'
      | 'sensor.indi_allsky_thermal_cpu_thermal_0'
      | 'sensor.indi_allsky_camera_temp_2'
      | 'sensor.indi_allsky_future_use_1'
      | 'sensor.indi_allsky_future_use_2'
      | 'sensor.indi_allsky_future_use_3'
      | 'sensor.indi_allsky_future_use_4'
      | 'sensor.indi_allsky_future_use_5'
      | 'sensor.indi_allsky_future_use_6'
      | 'sensor.indi_allsky_future_use_7'
      | 'sensor.indi_allsky_future_use_8'
      | 'sensor.indi_allsky_future_use_9'
      | 'sensor.indi_allsky_system_temp_10'
      | 'sensor.indi_allsky_system_temp_11'
      | 'sensor.indi_allsky_system_temp_12'
      | 'sensor.indi_allsky_system_temp_13'
      | 'sensor.indi_allsky_system_temp_14'
      | 'sensor.indi_allsky_system_temp_15'
      | 'sensor.indi_allsky_system_temp_16'
      | 'sensor.indi_allsky_system_temp_17'
      | 'sensor.indi_allsky_system_temp_18'
      | 'sensor.indi_allsky_system_temp_19'
      | 'sensor.indi_allsky_system_temp_20'
      | 'sensor.indi_allsky_system_temp_21'
      | 'sensor.indi_allsky_system_temp_22'
      | 'sensor.indi_allsky_system_temp_23'
      | 'sensor.indi_allsky_system_temp_24'
      | 'sensor.indi_allsky_system_temp_25'
      | 'sensor.indi_allsky_system_temp_26'
      | 'sensor.indi_allsky_system_temp_27'
      | 'sensor.indi_allsky_system_temp_28'
      | 'sensor.indi_allsky_system_temp_29'
      | 'sensor.indi_allsky_camera_temp_3'
      | 'sensor.indi_allsky_dew_heater_level'
      | 'sensor.indi_allsky_dew_point'
      | 'sensor.indi_allsky_frost_point'
      | 'sensor.indi_allsky_fan_level'
      | 'sensor.indi_allsky_heat_index'
      | 'sensor.indi_allsky_wind_dir_degrees'
      | 'sensor.indi_allsky_sqm_2'
      | 'sensor.indi_allsky_future_use_8_2'
      | 'sensor.indi_allsky_future_use_9_2'
      | 'sensor.indi_allsky_user_slot_10'
      | 'sensor.indi_allsky_user_slot_11'
      | 'sensor.indi_allsky_user_slot_12'
      | 'sensor.indi_allsky_user_slot_13'
      | 'sensor.indi_allsky_user_slot_14'
      | 'sensor.indi_allsky_user_slot_15'
      | 'sensor.indi_allsky_user_slot_16'
      | 'sensor.indi_allsky_user_slot_17'
      | 'sensor.indi_allsky_user_slot_18'
      | 'sensor.indi_allsky_user_slot_19'
      | 'sensor.indi_allsky_user_slot_20'
      | 'sensor.indi_allsky_user_slot_21'
      | 'sensor.indi_allsky_user_slot_22'
      | 'sensor.indi_allsky_user_slot_23'
      | 'sensor.indi_allsky_user_slot_24'
      | 'sensor.indi_allsky_user_slot_25'
      | 'sensor.indi_allsky_user_slot_26'
      | 'sensor.indi_allsky_user_slot_27'
      | 'sensor.indi_allsky_user_slot_28'
      | 'sensor.indi_allsky_user_slot_29'
      | 'switch.astrolive_astrobox_switch_0'
      | 'switch.astrolive_astrobox_switch_1'
      | 'switch.astrolive_astrobox_switch_2'
      | 'switch.astrolive_astrobox_switch_3'
      | 'switch.astrolive_astrobox_switch_4'
      | 'switch.astrolive_astrobox_switch_5'
      | 'switch.astrolive_astrobox_switch_6'
      | 'switch.astrolive_astrobox_switch_7'
      | 'binary_sensor.p2s_22e8aj5c0901243_recording_timelapse'
      | 'binary_sensor.p2s_22e8aj5c0901243_extruder_filament_state'
      | 'binary_sensor.p2s_22e8aj5c0901243_hms_errors'
      | 'binary_sensor.p2s_22e8aj5c0901243_print_error'
      | 'binary_sensor.p2s_22e8aj5c0901243_online'
      | 'binary_sensor.p2s_22e8aj5c0901243_firmware_update'
      | 'binary_sensor.p2s_22e8aj5c0901243_enclosure_door'
      | 'binary_sensor.p2s_22e8aj5c0901243_airduct_mode'
      | 'binary_sensor.p2s_22e8aj5c0901243_developer_lan_mode'
      | 'binary_sensor.p2s_22e8aj5c0901243_mqtt_encryption_firmware'
      | 'binary_sensor.p2s_22e8aj5c0901243_hybrid_mqtt_blocks_control'
      | 'binary_sensor.p2s_22e8aj5c0901243_ams_1_active'
      | 'binary_sensor.p2s_22e8aj5c0901243_ams_1_drying'
      | 'binary_sensor.p2s_22e8aj5c0901243_externalspool_active'
      | 'camera.p2s_22e8aj5c0901243_camera'
      | 'image.p2s_22e8aj5c0901243_cover_image'
      | 'image.p2s_22e8aj5c0901243_pick_image'
      | 'light.p2s_22e8aj5c0901243_chamber_light'
      | 'sensor.p2s_22e8aj5c0901243_externalspool_external_spool'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_humidity_index'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_humidity'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_temperature'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_remaining_drying_time'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_tray_1'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_tray_2'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_tray_3'
      | 'sensor.p2s_22e8aj5c0901243_ams_1_tray_4'
      | 'sensor.p2s_22e8aj5c0901243_mqtt_connection_mode'
      | 'sensor.p2s_22e8aj5c0901243_wi_fi_signal'
      | 'sensor.p2s_22e8aj5c0901243_bed_temperature'
      | 'sensor.p2s_22e8aj5c0901243_bed_target_temperature'
      | 'sensor.p2s_22e8aj5c0901243_chamber_temperature'
      | 'sensor.p2s_22e8aj5c0901243_nozzle_temperature'
      | 'sensor.p2s_22e8aj5c0901243_nozzle_target_temperature'
      | 'sensor.p2s_22e8aj5c0901243_aux_fan_speed'
      | 'sensor.p2s_22e8aj5c0901243_chamber_fan_speed'
      | 'sensor.p2s_22e8aj5c0901243_cooling_fan_speed'
      | 'sensor.p2s_22e8aj5c0901243_heatbreak_fan_speed'
      | 'sensor.p2s_22e8aj5c0901243_model_download'
      | 'sensor.p2s_22e8aj5c0901243_speed_profile'
      | 'sensor.p2s_22e8aj5c0901243_current_stage'
      | 'sensor.p2s_22e8aj5c0901243_print_progress'
      | 'sensor.p2s_22e8aj5c0901243_print_status'
      | 'sensor.p2s_22e8aj5c0901243_printable_objects'
      | 'sensor.p2s_22e8aj5c0901243_sd_card_status'
      | 'sensor.p2s_22e8aj5c0901243_skipped_objects'
      | 'sensor.p2s_22e8aj5c0901243_start_time'
      | 'sensor.p2s_22e8aj5c0901243_remaining_time'
      | 'sensor.p2s_22e8aj5c0901243_end_time'
      | 'sensor.p2s_22e8aj5c0901243_total_usage'
      | 'sensor.p2s_22e8aj5c0901243_current_layer'
      | 'sensor.p2s_22e8aj5c0901243_total_layer_count'
      | 'sensor.p2s_22e8aj5c0901243_gcode_filename'
      | 'sensor.p2s_22e8aj5c0901243_gcode_file_downloaded'
      | 'sensor.p2s_22e8aj5c0901243_task_name'
      | 'sensor.p2s_22e8aj5c0901243_print_type'
      | 'sensor.p2s_22e8aj5c0901243_printer_name'
      | 'sensor.p2s_22e8aj5c0901243_print_length'
      | 'sensor.p2s_22e8aj5c0901243_print_bed_type'
      | 'sensor.p2s_22e8aj5c0901243_print_weight'
      | 'sensor.p2s_22e8aj5c0901243_active_tray'
      | 'sensor.p2s_22e8aj5c0901243_nozzle_size'
      | 'sensor.p2s_22e8aj5c0901243_nozzle_type'
      | 'sensor.p2s_22e8aj5c0901243_ip_address'
      | 'sensor.p2s_22e8aj5c0901243_serial_number'
      | 'switch.p2s_22e8aj5c0901243_enable_camera'
      | 'media_player.spotifyplus_jerry_medeiros'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_id'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_path'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_visibility'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_useragent'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_user'
      | 'binary_sensor.browser_mod_ebba023e_cd99c775_browser_fullykiosk'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_width'
      | 'sensor.browser_mod_ebba023e_cd99c775_browser_height'
      | 'binary_sensor.browser_mod_ebba023e_cd99c775_browser_dark_mode'
      | 'binary_sensor.browser_mod_ebba023e_cd99c775'
      | 'light.browser_mod_ebba023e_cd99c775_screen'
      | 'media_player.browser_mod_ebba023e_cd99c775'
      | 'sensor.browser_mod_ebba023e_cd99c775_panel'
      | 'binary_sensor.office_motion_occupancy'
      | 'binary_sensor.office_motion'
      | 'binary_sensor.third_reality_inc_3rws18bz'
      | 'binary_sensor.third_reality_inc_3rws18bz_opening'
      | 'binary_sensor.backyard_entrance_sensor_occupancy'
      | 'binary_sensor.backyard_entrance_sensor'
      | 'binary_sensor.front_door_entrance_sensor_occupancy'
      | 'binary_sensor.front_door_entrance_sensor'
      | 'binary_sensor.third_reality_inc_3rws18bz_2'
      | 'binary_sensor.third_reality_inc_3rws18bz_opening_2'
      | 'button.bedroom_switch_identify'
      | 'button.office_swich_identify'
      | 'button.dinning_identify'
      | 'button.office_motion_identify'
      | 'button.bathroom_switch_identify'
      | 'button.bathroom_exhaust_identify'
      | 'button.backyard_entrance_sensor_identify'
      | 'button.front_door_entrance_sensor_identify'
      | 'light.dinning_light'
      | 'number.dinning_on_level'
      | 'number.dinning_none'
      | 'number.dinning_none_2'
      | 'number.office_motion_detection_interval'
      | 'number.third_reality_inc_3rws18bz_siren_time'
      | 'number.backyard_entrance_sensor_detection_interval'
      | 'number.front_door_entrance_sensor_detection_interval'
      | 'number.third_reality_inc_3rws18bz_siren_time_2'
      | 'select.bedroom_switch_start_up_behavior'
      | 'select.office_swich_start_up_behavior'
      | 'select.dinning_none'
      | 'select.dinning_none_2'
      | 'select.office_motion_motion_sensitivity'
      | 'select.bathroom_switch_start_up_behavior'
      | 'select.bathroom_exhaust_start_up_behavior'
      | 'select.backyard_entrance_sensor_motion_sensitivity'
      | 'select.front_door_entrance_sensor_motion_sensitivity'
      | 'sensor.bedroom_switch_battery'
      | 'sensor.office_swich_battery'
      | 'sensor.dinning_device_temperature'
      | 'sensor.dinning_summation_delivered'
      | 'sensor.office_motion_lqi'
      | 'sensor.office_motion_battery'
      | 'sensor.office_motion_illuminance'
      | 'sensor.bathroom_switch_rssi'
      | 'sensor.bathroom_switch_lqi'
      | 'sensor.bathroom_switch_battery'
      | 'sensor.bathroom_exhaust_lqi'
      | 'sensor.bathroom_exhaust_battery'
      | 'sensor.third_reality_inc_3rws18bz_battery'
      | 'sensor.backyard_entrance_sensor_battery'
      | 'sensor.backyard_entrance_sensor_illuminance'
      | 'sensor.front_door_entrance_sensor_battery'
      | 'sensor.front_door_entrance_sensor_illuminance'
      | 'sensor.third_reality_inc_3rws18bz_battery_2'
      | 'switch.bedroom_switch'
      | 'switch.office_swich_switch'
      | 'switch.office_motion_led_trigger_indicator'
      | 'switch.bathroom_switch'
      | 'switch.bathroom_exhaust'
      | 'switch.third_reality_inc_3rws18bz_enable_siren'
      | 'switch.backyard_entrance_sensor_led_trigger_indicator'
      | 'switch.front_door_entrance_sensor_led_trigger_indicator'
      | 'switch.third_reality_inc_3rws18bz_enable_siren_2'
      | 'update.bedroom_switch_firmware'
      | 'update.office_swich_firmware'
      | 'update.dinning_firmware'
      | 'update.office_motion_firmware'
      | 'update.bathroom_switch_firmware'
      | 'update.bathroom_exhaust_firmware'
      | 'update.third_reality_inc_3rws18bz_firmware'
      | 'update.backyard_entrance_sensor_firmware'
      | 'update.front_door_entrance_sensor_firmware'
      | 'update.third_reality_inc_3rws18bz_firmware_2'
      | 'device_tracker.lw_ivu'
      | 'automation.control_humidifier_based_on_humidity'
      | 'sensor.b9407f30_f5f8_466e_aff9_25556b57fe6d_4096_5_estimated_distance'
      | 'switch.front_yard_mss620_switch_1'
      | 'switch.front_yard_mss620_switch_2'
      | 'switch.front_yard_mss620_main_channel'
      | 'device_tracker.nexc1_2bcf'
      | 'sensor.nexc1_2bcf_estimated_distance'
      | 'device_tracker.wsbc018415120s_a04f'
      | 'sensor.wsbc018415120s_a04f_estimated_distance'
      | 'device_tracker.kycs_78ef'
      | 'sensor.kycs_78ef_estimated_distance'
      | 'automation.turn_on_christmas_lights_when_its_dark'
      | 'automation.turn_off_christmas_lights'
      | 'device_tracker.nexc1_9ea3'
      | 'sensor.nexc1_9ea3_estimated_distance'
      | 'device_tracker.dsnymble_3770'
      | 'sensor.dsnymble_3770_estimated_distance'
      | 'device_tracker.nexc1_65a5'
      | 'sensor.nexc1_65a5_estimated_distance'
      | 'device_tracker.genx_000036033800_566d'
      | 'sensor.genx_000036033800_566d_estimated_distance'
      | 'device_tracker.nexc1_67e3'
      | 'sensor.nexc1_67e3_estimated_distance'
      | 'device_tracker.genx_000036033800_989b'
      | 'sensor.genx_000036033800_989b_estimated_distance'
      | 'device_tracker.nexc1_b733'
      | 'sensor.nexc1_b733_estimated_distance'
      | 'device_tracker.nexc1_263d'
      | 'sensor.nexc1_263d_estimated_distance'
      | 'device_tracker.nexc1_08ef'
      | 'sensor.nexc1_08ef_estimated_distance'
      | 'device_tracker.kycs_790f'
      | 'sensor.kycs_790f_estimated_distance'
      | 'device_tracker.rivian_phone_key_c89d'
      | 'sensor.rivian_phone_key_c89d_estimated_distance'
      | 'device_tracker.rivian_phone_key_82c7'
      | 'sensor.rivian_phone_key_82c7_estimated_distance'
      | 'device_tracker.rivian_phone_key_3222'
      | 'sensor.rivian_phone_key_3222_estimated_distance'
      | 'device_tracker.s2dfcfaa5f5dd1046c_f69b'
      | 'sensor.s2dfcfaa5f5dd1046c_f69b_estimated_distance'
      | 'device_tracker.s401fbf60f3b7d377c_76ba'
      | 'sensor.s401fbf60f3b7d377c_76ba_estimated_distance'
      | 'device_tracker.rivian_phone_key_bd31'
      | 'sensor.rivian_phone_key_bd31_estimated_distance'
      | 'device_tracker.rivian_phone_key_37ea'
      | 'sensor.rivian_phone_key_37ea_estimated_distance'
      | 'device_tracker.tm5030_24205553_fe9b'
      | 'sensor.tm5030_24205553_fe9b_estimated_distance'
      | 'device_tracker.rivian_phone_key_0cc9'
      | 'sensor.rivian_phone_key_0cc9_estimated_distance'
      | 'device_tracker.rivian_phone_key_888c'
      | 'sensor.rivian_phone_key_888c_estimated_distance'
      | 'device_tracker.nexc1_b91f'
      | 'sensor.nexc1_b91f_estimated_distance'
      | 'device_tracker.tirelinc_280a'
      | 'sensor.tirelinc_280a_estimated_distance'
      | 'device_tracker.rivian_phone_key_deb0'
      | 'sensor.rivian_phone_key_deb0_estimated_distance'
      | 'device_tracker.rivian_phone_key_b4f8'
      | 'sensor.rivian_phone_key_b4f8_estimated_distance'
      | 'media_player.chromecast4952'
      | 'media_player.chromecast9104'
      | 'device_tracker.rivian_phone_key_b77b'
      | 'sensor.rivian_phone_key_b77b_estimated_distance'
      | 'device_tracker.rivian_phone_key_3198'
      | 'sensor.rivian_phone_key_3198_estimated_distance'
      | 'device_tracker.rivian_phone_key_c346'
      | 'sensor.rivian_phone_key_c346_estimated_distance'
      | 'device_tracker.s9bb653ab9496402fc_13f9'
      | 'sensor.s9bb653ab9496402fc_13f9_estimated_distance'
      | 'device_tracker.nexc1_bde5'
      | 'sensor.nexc1_bde5_estimated_distance'
      | 'device_tracker.rivian_phone_key_01af'
      | 'sensor.rivian_phone_key_01af_estimated_distance'
      | 'device_tracker.rivian_phone_key_38aa'
      | 'sensor.rivian_phone_key_38aa_estimated_distance'
      | 'device_tracker.rivian_phone_key_b223'
      | 'sensor.rivian_phone_key_b223_estimated_distance'
      | 'device_tracker.wsbc018419375t_8756'
      | 'sensor.wsbc018419375t_8756_estimated_distance'
      | 'device_tracker.rivian_phone_key_6fc6'
      | 'sensor.rivian_phone_key_6fc6_estimated_distance'
      | 'device_tracker.rivian_phone_key_54cc'
      | 'sensor.rivian_phone_key_54cc_estimated_distance'
      | 'device_tracker.wsbc004014466t_a915'
      | 'sensor.wsbc004014466t_a915_estimated_distance'
      | 'device_tracker.rivian_phone_key_e02a'
      | 'sensor.rivian_phone_key_e02a_estimated_distance'
      | 'device_tracker.rivian_phone_key_1642'
      | 'sensor.rivian_phone_key_1642_estimated_distance'
      | 'device_tracker.rivian_phone_key_2f21'
      | 'sensor.rivian_phone_key_2f21_estimated_distance'
      | 'device_tracker.nexc1_d401'
      | 'sensor.nexc1_d401_estimated_distance'
      | 'device_tracker.rivian_phone_key_4b64'
      | 'sensor.rivian_phone_key_4b64_estimated_distance'
      | 'device_tracker.s4d48c93412f024b3c_47ee'
      | 'sensor.s4d48c93412f024b3c_47ee_estimated_distance'
      | 'device_tracker.genx_000036033932'
      | 'sensor.genx_000036033932_estimated_distance'
      | 'device_tracker.rivian_phone_key_157e'
      | 'sensor.rivian_phone_key_157e_estimated_distance'
      | 'remote.universal_remote'
      | 'device_tracker.mc200_01_157590_11e5'
      | 'sensor.mc200_01_157590_11e5_estimated_distance'
      | 'device_tracker.mc200_01_155313_0cb8'
      | 'sensor.mc200_01_155313_0cb8_estimated_distance'
      | 'device_tracker.0102000000_4a8f'
      | 'sensor.0102000000_4a8f_estimated_distance'
      | 'device_tracker.telematic_437950_637a'
      | 'sensor.telematic_437950_637a_estimated_distance'
      | 'device_tracker.s9f9979eaf58ec7e2c_da76'
      | 'sensor.s9f9979eaf58ec7e2c_da76_estimated_distance'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_path'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_visibility'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_useragent'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_user'
      | 'binary_sensor.browser_mod_a10edcc9_178b0636_browser_fullykiosk'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_width'
      | 'sensor.browser_mod_a10edcc9_178b0636_browser_height'
      | 'binary_sensor.browser_mod_a10edcc9_178b0636_browser_dark_mode'
      | 'binary_sensor.browser_mod_a10edcc9_178b0636'
      | 'light.browser_mod_a10edcc9_178b0636_screen'
      | 'media_player.browser_mod_a10edcc9_178b0636'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_path'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_visibility'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_useragent'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_user'
      | 'binary_sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_fullykiosk'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_width'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_height'
      | 'binary_sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_dark_mode'
      | 'binary_sensor.browser_mod_0bd0dda7_e0f0aa5e'
      | 'light.browser_mod_0bd0dda7_e0f0aa5e_screen'
      | 'media_player.browser_mod_0bd0dda7_e0f0aa5e'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_battery'
      | 'binary_sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_charging'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_path'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_visibility'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_useragent'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_user'
      | 'binary_sensor.browser_mod_3c84d2e4_93d59195_browser_fullykiosk'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_width'
      | 'sensor.browser_mod_3c84d2e4_93d59195_browser_height'
      | 'binary_sensor.browser_mod_3c84d2e4_93d59195_browser_dark_mode'
      | 'binary_sensor.browser_mod_3c84d2e4_93d59195'
      | 'light.browser_mod_3c84d2e4_93d59195_screen'
      | 'media_player.browser_mod_3c84d2e4_93d59195'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_path'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_visibility'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_useragent'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_user'
      | 'binary_sensor.browser_mod_12dd4432_a5f35b6f_browser_fullykiosk'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_width'
      | 'sensor.browser_mod_12dd4432_a5f35b6f_browser_height'
      | 'binary_sensor.browser_mod_12dd4432_a5f35b6f_browser_dark_mode'
      | 'binary_sensor.browser_mod_12dd4432_a5f35b6f'
      | 'light.browser_mod_12dd4432_a5f35b6f_screen'
      | 'media_player.browser_mod_12dd4432_a5f35b6f'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_path'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_visibility'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_useragent'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_user'
      | 'binary_sensor.browser_mod_c574e838_0cffaae4_browser_fullykiosk'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_width'
      | 'sensor.browser_mod_c574e838_0cffaae4_browser_height'
      | 'binary_sensor.browser_mod_c574e838_0cffaae4_browser_dark_mode'
      | 'binary_sensor.browser_mod_c574e838_0cffaae4'
      | 'light.browser_mod_c574e838_0cffaae4_screen'
      | 'media_player.browser_mod_c574e838_0cffaae4'
      | 'automation.new_automation'
      | 'device_tracker.wsbc018405191v_47a7'
      | 'sensor.wsbc018405191v_47a7_estimated_distance'
      | 'media_player.android_tv_10_0_0_159'
      | 'remote.android_tv_10_0_0_159'
      | 'device_tracker.wsbc002022915t_da63'
      | 'sensor.wsbc002022915t_da63_estimated_distance'
      | 'device_tracker.s0b1138318e9437e1c_4f03'
      | 'sensor.s0b1138318e9437e1c_4f03_estimated_distance'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_path'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_visibility'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_useragent'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_user'
      | 'binary_sensor.browser_mod_b90bc978_debb3a94_browser_fullykiosk'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_width'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_height'
      | 'binary_sensor.browser_mod_b90bc978_debb3a94_browser_dark_mode'
      | 'binary_sensor.browser_mod_b90bc978_debb3a94'
      | 'light.browser_mod_b90bc978_debb3a94_screen'
      | 'media_player.browser_mod_b90bc978_debb3a94'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_path'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_visibility'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_useragent'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_user'
      | 'binary_sensor.browser_mod_5f12bd68_c831a460_browser_fullykiosk'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_width'
      | 'sensor.browser_mod_5f12bd68_c831a460_browser_height'
      | 'binary_sensor.browser_mod_5f12bd68_c831a460_browser_dark_mode'
      | 'binary_sensor.browser_mod_5f12bd68_c831a460'
      | 'light.browser_mod_5f12bd68_c831a460_screen'
      | 'media_player.browser_mod_5f12bd68_c831a460'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_path'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_visibility'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_useragent'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_user'
      | 'binary_sensor.browser_mod_060ca22c_d503b540_browser_fullykiosk'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_width'
      | 'sensor.browser_mod_060ca22c_d503b540_browser_height'
      | 'binary_sensor.browser_mod_060ca22c_d503b540_browser_dark_mode'
      | 'binary_sensor.browser_mod_060ca22c_d503b540'
      | 'light.browser_mod_060ca22c_d503b540_screen'
      | 'media_player.browser_mod_060ca22c_d503b540'
      | 'sensor.browser_mod_b90bc978_debb3a94_panel'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_path'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_visibility'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_useragent'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_user'
      | 'binary_sensor.browser_mod_cc61d7ce_8a17e1c0_browser_fullykiosk'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_width'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_height'
      | 'binary_sensor.browser_mod_cc61d7ce_8a17e1c0_browser_dark_mode'
      | 'binary_sensor.browser_mod_cc61d7ce_8a17e1c0'
      | 'light.browser_mod_cc61d7ce_8a17e1c0_screen'
      | 'media_player.browser_mod_cc61d7ce_8a17e1c0'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_panel'
      | 'device_tracker.telematic_431607_2152'
      | 'sensor.telematic_431607_2152_estimated_distance'
      | 'device_tracker.telematic_309415_e976'
      | 'sensor.telematic_309415_e976_estimated_distance'
      | 'device_tracker.telematic_437125_3d76'
      | 'sensor.telematic_437125_3d76_estimated_distance'
      | 'device_tracker.telematic_082038_d973'
      | 'sensor.telematic_082038_d973_estimated_distance'
      | 'device_tracker.telematic_155313_0cb8'
      | 'sensor.telematic_155313_0cb8_estimated_distance'
      | 'device_tracker.telematic_434965_4913'
      | 'sensor.telematic_434965_4913_estimated_distance'
      | 'device_tracker.telematic_089306_e3b4'
      | 'sensor.telematic_089306_e3b4_estimated_distance'
      | 'device_tracker.telematic_099388_6434'
      | 'sensor.telematic_099388_6434_estimated_distance'
      | 'device_tracker.telematic_324026_409c'
      | 'sensor.telematic_324026_409c_estimated_distance'
      | 'device_tracker.telematic_021614_f89c'
      | 'sensor.telematic_021614_f89c_estimated_distance'
      | 'device_tracker.telematic_308342_eae6'
      | 'sensor.telematic_308342_eae6_estimated_distance'
      | 'device_tracker.wsbc024007781v_4bf1'
      | 'sensor.wsbc024007781v_4bf1_estimated_distance'
      | 'device_tracker.s8b67a6499b56678fc_2904'
      | 'sensor.s8b67a6499b56678fc_2904_estimated_distance'
      | 'device_tracker.telematic_160578_d1be'
      | 'sensor.telematic_160578_d1be_estimated_distance'
      | 'device_tracker.telematic_166575_4bca'
      | 'sensor.telematic_166575_4bca_estimated_distance'
      | 'device_tracker.telematic_316618_18e7'
      | 'sensor.telematic_316618_18e7_estimated_distance'
      | 'device_tracker.telematic_275269_87ad'
      | 'sensor.telematic_275269_87ad_estimated_distance'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_path'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_visibility'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_useragent'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_user'
      | 'binary_sensor.browser_mod_c8af211c_0b0d1c4b_browser_fullykiosk'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_width'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_height'
      | 'binary_sensor.browser_mod_c8af211c_0b0d1c4b_browser_dark_mode'
      | 'binary_sensor.browser_mod_c8af211c_0b0d1c4b'
      | 'light.browser_mod_c8af211c_0b0d1c4b_screen'
      | 'media_player.browser_mod_c8af211c_0b0d1c4b'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_panel'
      | 'device_tracker.telematic_091138_73d7'
      | 'sensor.telematic_091138_73d7_estimated_distance'
      | 'sensor.browser_mod_cc61d7ce_8a17e1c0_browser_id'
      | 'sensor.browser_mod_c8af211c_0b0d1c4b_browser_id'
      | 'device_tracker.telematic_286399_83c0'
      | 'sensor.telematic_286399_83c0_estimated_distance'
      | 'device_tracker.telematic_136297_4f2f'
      | 'sensor.telematic_136297_4f2f_estimated_distance'
      | 'sensor.browser_mod_b90bc978_debb3a94_browser_id'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_id'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_path'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_visibility'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_useragent'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_user'
      | 'binary_sensor.browser_mod_61d8ea0c_df707080_browser_fullykiosk'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_width'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_height'
      | 'binary_sensor.browser_mod_61d8ea0c_df707080_browser_dark_mode'
      | 'binary_sensor.browser_mod_61d8ea0c_df707080'
      | 'light.browser_mod_61d8ea0c_df707080_screen'
      | 'media_player.browser_mod_61d8ea0c_df707080'
      | 'sensor.browser_mod_61d8ea0c_df707080_panel'
      | 'sensor.browser_mod_61d8ea0c_df707080_browser_battery'
      | 'binary_sensor.browser_mod_61d8ea0c_df707080_browser_charging'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_id'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_path'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_visibility'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_useragent'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_user'
      | 'binary_sensor.browser_mod_e6bcf218_d7031d95_browser_fullykiosk'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_width'
      | 'sensor.browser_mod_e6bcf218_d7031d95_browser_height'
      | 'binary_sensor.browser_mod_e6bcf218_d7031d95_browser_dark_mode'
      | 'binary_sensor.browser_mod_e6bcf218_d7031d95'
      | 'light.browser_mod_e6bcf218_d7031d95_screen'
      | 'media_player.browser_mod_e6bcf218_d7031d95'
      | 'sensor.browser_mod_e6bcf218_d7031d95_panel'
      | 'device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_28364_2711'
      | 'sensor.74278bda_b644_4520_8f0c_720eaf059935_0_28364_2711_estimated_distance'
      | 'device_tracker.telematic_108379_3f3c'
      | 'sensor.telematic_108379_3f3c_estimated_distance'
      | 'device_tracker.telematic_545349_2549'
      | 'sensor.telematic_545349_2549_estimated_distance'
      | 'device_tracker.telematic_145264_1a27'
      | 'sensor.telematic_145264_1a27_estimated_distance'
      | 'device_tracker.telematic_072369_123b'
      | 'sensor.telematic_072369_123b_estimated_distance'
      | 'device_tracker.telematic_151775_b6d8'
      | 'sensor.telematic_151775_b6d8_estimated_distance'
      | 'device_tracker.telematic_297859_44b6'
      | 'sensor.telematic_297859_44b6_estimated_distance'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_id'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_path'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_visibility'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_useragent'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_user'
      | 'binary_sensor.browser_mod_d1882de5_acac789c_browser_fullykiosk'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_width'
      | 'sensor.browser_mod_d1882de5_acac789c_browser_height'
      | 'binary_sensor.browser_mod_d1882de5_acac789c_browser_dark_mode'
      | 'binary_sensor.browser_mod_d1882de5_acac789c'
      | 'light.browser_mod_d1882de5_acac789c_screen'
      | 'media_player.browser_mod_d1882de5_acac789c'
      | 'sensor.browser_mod_d1882de5_acac789c_panel'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_id'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_path'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_visibility'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_useragent'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_user'
      | 'binary_sensor.browser_mod_929748ec_89c0abea_browser_fullykiosk'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_width'
      | 'sensor.browser_mod_929748ec_89c0abea_browser_height'
      | 'binary_sensor.browser_mod_929748ec_89c0abea_browser_dark_mode'
      | 'binary_sensor.browser_mod_929748ec_89c0abea'
      | 'light.browser_mod_929748ec_89c0abea_screen'
      | 'media_player.browser_mod_929748ec_89c0abea'
      | 'sensor.browser_mod_929748ec_89c0abea_panel'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_browser_id'
      | 'sensor.browser_mod_0bd0dda7_e0f0aa5e_panel'
      | 'button.living_room_tv_favorite_current_song'
      | 'media_player.living_room_tv_3'
      | 'button.office_speaker_favorite_current_song'
      | 'media_player.office_speaker_2'
      | 'button.basement_tv_favorite_current_song'
      | 'media_player.basement_tv_3'
      | 'button.living_room_speaker_favorite_current_song'
      | 'media_player.living_room_speaker_2'
      | 'button.everywhere_favorite_current_song'
      | 'media_player.everywhere_2'
      | 'button.bedroom_speaker_favorite_current_song'
      | 'media_player.bedroom_speaker_2'
      | 'button.tv_airplay_favorite_current_song'
      | 'media_player.tv_airplay'
      | 'binary_sensor.presence_sensor_cff9_occupancy'
      | 'sensor.presence_sensor_cff9_light_level'
      | 'sensor.presence_sensor_cff9_battery';
  }
}
