import "vue";
const t = {
  ButtonsMainActivate: () => "Sounds/ButtonsMainActivate.ogg",
  ButtonsMainHover: () => "Sounds/ButtonsMainHover.ogg",
  ButtonsMain: () => ({ Activate: { SoundPath: t.ButtonsMainActivate(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsMainHover(), MinPitch: -0.1, MaxPitch: 0.1, Volume: 2 } }),
  ButtonsLightActivate: () => "Sounds/ButtonsLightActivate.ogg",
  ButtonsLightHover: () => "Sounds/ButtonsLightHover.ogg",
  ButtonsLight: () => ({ Activate: { SoundPath: t.ButtonsLightActivate(), MinPitch: -0.4, MaxPitch: 0.4, Volume: 4 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 } }),
  ButtonsCancelActivate: () => "Sounds/ButtonsCancelActivate.ogg",
  ButtonsCancel: () => ({ Activate: { SoundPath: t.ButtonsCancelActivate(), MinPitch: -0.4, MaxPitch: 0.4, Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 } }),
  CosmeticsTilesActivate: () => "Sounds/CosmeticsTilesActivate.ogg",
  CosmeticsTiles: () => ({ Activate: { SoundPath: t.CosmeticsTilesActivate(), MinPitch: -0.4, MaxPitch: 0.4, Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 } }),
  DropdownBox: () => ({ Activate: { SoundPath: t.Tick(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 }, Close: { SoundPath: t.ButtonsCancelActivate(), Volume: 6 } }),
  EnterWorldActivate: () => "Sounds/EnterWorldActivate.ogg",
  EnterWorld: () => ({ Activate: { SoundPath: t.EnterWorldActivate(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 }, Context: { SoundPath: t.ButtonsLightActivate(), Volume: 6 } }),
  FriendsList: () => ({}),
  HButtonHover: () => "Sounds/HButtonHover.ogg",
  Lock: () => ({ Activate: { SoundPath: "Sounds/LockActivate.ogg", Volume: 6 } }),
  Unlock: () => ({ Activate: { SoundPath: "Sounds/UnlockActivate.ogg", Volume: 6 } }),
  SaveActivate: () => "Sounds/SaveActivate.ogg",
  SaveSettings: () => ({ Activate: { SoundPath: t.SaveActivate(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 } }),
  Respawn: () => "Sounds/Respawn_Stereo.ogg",
  RespawnActivate: () => ({ Activate: { SoundPath: t.Respawn(), Volume: -6 } }),
  ServerList: () => ({ Activate: { SoundPath: t.EnterWorldActivate(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsLightHover(), Volume: 6 } }),
  ShuffleActivate: () => "Sounds/ShuffleActivate.ogg",
  Shuffle: () => ({ Activate: { SoundPath: t.ShuffleActivate(), MinPitch: -0.4, MaxPitch: 0.4, Volume: 1 } }),
  Tick: () => "Sounds/TickActivate.ogg",
  Untick: () => "Sounds/UntickActivate.ogg",
  TopBarActivate: () => "Sounds/TopBarActivate.ogg",
  TopBar: () => ({ Activate: { SoundPath: t.TopBarActivate(), Volume: 6 }, MouseHover: { SoundPath: t.ButtonsMainHover(), Volume: 2 } })
};
export {
  t as Vars
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291bmRzLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
