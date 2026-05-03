import { defineComponent as a, h as o } from "vue";
import { Vars as c } from "./Sounds.js";
const e = {
  DefaultLabelStyle: () => ({ FontSize: 16, TextColor: "#96a9be" }),
  ButtonSounds: () => c.ButtonsLight(),
  ButtonsCancel: () => c.ButtonsCancel(),
  ButtonBorder: () => 12,
  PrimaryButtonHeight: () => 44,
  SmallButtonHeight: () => 32,
  BigButtonHeight: () => 48,
  ButtonPadding: () => 24,
  DefaultButtonMinWidth: () => 172,
  DefaultButtonHeight: () => e.PrimaryButtonHeight(),
  DefaultButtonPadding: () => e.ButtonPadding(),
  DefaultButtonDefaultBackground: () => ({ TexturePath: "Common/Buttons/Primary.png", VerticalBorder: e.ButtonBorder(), HorizontalBorder: 80 }),
  DefaultButtonHoveredBackground: () => ({ TexturePath: "Common/Buttons/Primary_Hovered.png", VerticalBorder: e.ButtonBorder(), HorizontalBorder: 80 }),
  DefaultButtonPressedBackground: () => ({ TexturePath: "Common/Buttons/Primary_Pressed.png", VerticalBorder: e.ButtonBorder(), HorizontalBorder: 80 }),
  DefaultButtonDisabledBackground: () => ({ TexturePath: "Common/Buttons/Disabled.png", VerticalBorder: e.ButtonBorder(), HorizontalBorder: 80 }),
  DefaultSquareButtonDefaultBackground: () => ({ TexturePath: "Common/Buttons/Primary_Square.png", Border: e.ButtonBorder() }),
  DefaultSquareButtonHoveredBackground: () => ({ TexturePath: "Common/Buttons/Primary_Square_Hovered.png", Border: e.ButtonBorder() }),
  DefaultSquareButtonPressedBackground: () => ({ TexturePath: "Common/Buttons/Primary_Square_Pressed.png", Border: e.ButtonBorder() }),
  DefaultSquareButtonDisabledBackground: () => ({ TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() }),
  DisabledColor: () => "#797b7c",
  DefaultButtonLabelStyle: () => ({ FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" }),
  DefaultButtonDisabledLabelStyle: () => ({ ...e.DefaultButtonLabelStyle(), TextColor: e.DisabledColor() }),
  PrimaryButtonLabelStyle: () => e.DefaultButtonLabelStyle(),
  PrimaryButtonDisabledLabelStyle: () => e.DefaultButtonDisabledLabelStyle(),
  SecondaryButtonLabelStyle: () => ({ ...e.DefaultButtonLabelStyle(), TextColor: "#bdcbd3" }),
  SecondaryButtonDisabledLabelStyle: () => ({ ...e.SecondaryButtonLabelStyle(), TextColor: e.DisabledColor() }),
  SmallButtonLabelStyle: () => ({ ...e.DefaultButtonLabelStyle(), FontSize: 14 }),
  SmallButtonDisabledLabelStyle: () => ({ ...e.SmallButtonLabelStyle(), TextColor: e.DisabledColor() }),
  SmallSecondaryButtonLabelStyle: () => ({ ...e.SecondaryButtonLabelStyle(), FontSize: 14 }),
  SmallSecondaryButtonDisabledLabelStyle: () => ({ ...e.SmallSecondaryButtonLabelStyle(), TextColor: e.DisabledColor() }),
  DefaultButtonStyle: () => ({ Default: { Background: e.DefaultButtonDefaultBackground() }, Hovered: { Background: e.DefaultButtonHoveredBackground() }, Pressed: { Background: e.DefaultButtonPressedBackground() }, Disabled: { Background: e.DefaultButtonDisabledBackground() }, Sounds: e.ButtonSounds() }),
  DefaultTextButtonStyle: () => ({ Default: { Background: e.DefaultButtonDefaultBackground(), LabelStyle: e.DefaultButtonLabelStyle() }, Hovered: { Background: e.DefaultButtonHoveredBackground(), LabelStyle: e.DefaultButtonLabelStyle() }, Pressed: { Background: e.DefaultButtonPressedBackground(), LabelStyle: e.DefaultButtonLabelStyle() }, Disabled: { Background: e.DefaultButtonDisabledBackground(), LabelStyle: e.DefaultButtonDisabledLabelStyle() }, Sounds: e.ButtonSounds() }),
  SmallDefaultTextButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/ButtonSmall.png", Border: 6 }, LabelStyle: e.SmallButtonLabelStyle() }, Hovered: { Background: { TexturePath: "Common/ButtonSmallHovered.png", Border: 6 }, LabelStyle: e.SmallButtonLabelStyle() }, Pressed: { Background: { TexturePath: "Common/ButtonSmallPressed.png", Border: 6 }, LabelStyle: e.SmallButtonLabelStyle() }, Disabled: { Background: e.DefaultButtonDisabledBackground(), LabelStyle: e.SmallButtonDisabledLabelStyle() }, Sounds: e.ButtonSounds() }),
  CancelTextButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Destructive.png", Border: e.ButtonBorder() }, LabelStyle: e.DefaultButtonLabelStyle() }, Hovered: { Background: { TexturePath: "Common/Buttons/Destructive_Hovered.png", Border: e.ButtonBorder() }, LabelStyle: e.DefaultButtonLabelStyle() }, Pressed: { Background: { TexturePath: "Common/Buttons/Destructive_Pressed.png", Border: e.ButtonBorder() }, LabelStyle: e.DefaultButtonLabelStyle() }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() }, LabelStyle: e.DefaultButtonLabelStyle() }, Sounds: e.ButtonsCancel() }),
  CancelButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Destructive.png", Border: e.ButtonBorder() } }, Hovered: { Background: { TexturePath: "Common/Buttons/Destructive_Hovered.png", Border: e.ButtonBorder() } }, Pressed: { Background: { TexturePath: "Common/Buttons/Destructive_Pressed.png", Border: e.ButtonBorder() } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() } }, Sounds: e.ButtonSounds() }),
  SecondaryButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: e.ButtonBorder() } }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: e.ButtonBorder() } }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: e.ButtonBorder() } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() } }, Sounds: e.ButtonSounds() }),
  SecondaryTextButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() } }),
  TertiaryButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Tertiary.png", Border: e.ButtonBorder() } }, Hovered: { Background: { TexturePath: "Common/Buttons/Tertiary_Hovered.png", Border: e.ButtonBorder() } }, Pressed: { Background: { TexturePath: "Common/Buttons/Tertiary_Pressed.png", Border: e.ButtonBorder() } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() } }, Sounds: e.ButtonSounds() }),
  SmallSecondaryTextButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: e.ButtonBorder() }, LabelStyle: e.SmallSecondaryButtonLabelStyle() }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: e.ButtonBorder() }, LabelStyle: e.SmallSecondaryButtonLabelStyle() }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: e.ButtonBorder() }, LabelStyle: e.SmallSecondaryButtonLabelStyle() }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() }, LabelStyle: e.SmallSecondaryButtonLabelStyle() } }),
  TertiaryTextButtonStyle: () => ({ Default: { Background: { TexturePath: "Common/Buttons/Tertiary.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Hovered: { Background: { TexturePath: "Common/Buttons/Tertiary_Hovered.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Pressed: { Background: { TexturePath: "Common/Buttons/Tertiary_Pressed.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: e.ButtonBorder() }, LabelStyle: e.SecondaryButtonLabelStyle() } }),
  DefaultColorPickerStyle: () => ({ OpacitySelectorBackground: "Common/ColorPickerOpacitySelectorBackground.png", ButtonBackground: "Common/ColorPickerButton.png", ButtonFill: "Common/ColorPickerFill.png", TextFieldDecoration: { Default: { Background: "#000000(0.5)" } }, TextFieldPadding: { Left: 7 }, TextFieldHeight: 32 }),
  DefaultColorPickerDropdownBoxStyle: () => ({ ColorPickerStyle: e.DefaultColorPickerStyle(), Background: { Default: "Common/ColorPickerDropdownBoxBackground.png" }, ArrowBackground: { Default: "Common/ColorPickerDropdownBoxArrow.png" }, Overlay: { Default: "Common/ColorPickerDropdownBoxOverlay.png" }, PanelBackground: { TexturePath: "Common/DropdownBox.png", Border: 16 }, PanelPadding: { Full: 15 }, PanelOffset: 10, ArrowAnchor: { Width: 11, Height: 7, Right: 3, Bottom: 3 } }),
  DefaultScrollbarStyle: () => ({ Spacing: 6, Size: 6, Background: { TexturePath: "Common/Scrollbar.png", Border: 3 }, Handle: { TexturePath: "Common/ScrollbarHandle.png", Border: 3 }, HoveredHandle: { TexturePath: "Common/ScrollbarHandleHovered.png", Border: 3 }, DraggedHandle: { TexturePath: "Common/ScrollbarHandleDragged.png", Border: 3 } }),
  DefaultExtraSpacingScrollbarStyle: () => ({ ...e.DefaultScrollbarStyle(), Spacing: 12 }),
  TranslucentScrollbarStyle: () => ({ Spacing: 6, Size: 6, OnlyVisibleWhenHovered: !0, Handle: { TexturePath: "Common/ScrollbarHandle.png", Border: 3 } }),
  DefaultPlaceholderScrollbarStyle: () => ({ Spacing: 12, Size: 10 }),
  DefaultCheckBoxStyle: () => ({ Unchecked: { DefaultBackground: { Color: "#00000000" }, HoveredBackground: { Color: "#00000000" }, PressedBackground: { Color: "#00000000" }, DisabledBackground: { Color: "#424242" }, ChangedSound: { SoundPath: c.Untick(), Volume: 6 } }, Checked: { DefaultBackground: { TexturePath: "Common/Checkmark.png" }, HoveredBackground: { TexturePath: "Common/Checkmark.png" }, PressedBackground: { TexturePath: "Common/Checkmark.png" }, ChangedSound: { SoundPath: c.Tick(), Volume: 6 } } }),
  InputBoxBackground: () => ({ TexturePath: "Common/InputBox.png", Border: 16 }),
  InputBoxHoveredBackground: () => ({ TexturePath: "Common/InputBoxHovered.png", Border: 16 }),
  InputBoxPressedBackground: () => ({ TexturePath: "Common/InputBoxPressed.png", Border: 16 }),
  InputBoxSelectedBackground: () => ({ TexturePath: "Common/InputBoxSelected.png", Border: 16 }),
  DefaultInputFieldStyle: () => ({}),
  DefaultInputFieldPlaceholderStyle: () => ({ TextColor: "#6e7da1" }),
  DefaultDropdownBoxLabelStyle: () => ({ TextColor: "#96a9be", RenderUppercase: !0, VerticalAlignment: "Center", FontSize: 13 }),
  DefaultDropdownBoxEntryLabelStyle: () => ({ ...e.DefaultDropdownBoxLabelStyle(), TextColor: "#b7cedd" }),
  DefaultDropdownBoxStyle: () => ({ DefaultBackground: { TexturePath: "Common/Dropdown.png", Border: 16 }, HoveredBackground: { TexturePath: "Common/DropdownHovered.png", Border: 16 }, PressedBackground: { TexturePath: "Common/DropdownPressed.png", Border: 16 }, DefaultArrowTexturePath: "Common/DropdownCaret.png", HoveredArrowTexturePath: "Common/DropdownCaret.png", PressedArrowTexturePath: "Common/DropdownPressedCaret.png", ArrowWidth: 13, ArrowHeight: 18, LabelStyle: e.DefaultDropdownBoxLabelStyle(), EntryLabelStyle: e.DefaultDropdownBoxEntryLabelStyle(), NoItemsLabelStyle: { ...e.DefaultDropdownBoxEntryLabelStyle(), TextColor: "#b7cedd(0.5)" }, SelectedEntryLabelStyle: { ...e.DefaultDropdownBoxEntryLabelStyle(), RenderBold: !0 }, HorizontalPadding: 8, PanelScrollbarStyle: e.DefaultScrollbarStyle(), PanelBackground: { TexturePath: "Common/DropdownBox.png", Border: 16 }, PanelPadding: 6, PanelAlign: "Right", PanelOffset: 7, EntryHeight: 31, EntriesInViewport: 10, HorizontalEntryPadding: 7, HoveredEntryBackground: { Color: "#0a0f17" }, PressedEntryBackground: { Color: "#0f1621" }, Sounds: c.DropdownBox(), EntrySounds: c.ButtonsLight(), FocusOutlineSize: 1, FocusOutlineColor: "#ffffff(0.4)" }),
  DropdownBoxHeight: () => 32,
  DefaultFileDropdownBoxStyle: () => ({ DefaultBackground: { TexturePath: "Common/Dropdown.png", Border: 16 }, HoveredBackground: { TexturePath: "Common/DropdownHovered.png", Border: 16 }, PressedBackground: { TexturePath: "Common/DropdownPressed.png", Border: 16 }, DefaultArrowTexturePath: "Common/DropdownCaret.png", HoveredArrowTexturePath: "Common/DropdownCaret.png", PressedArrowTexturePath: "Common/DropdownPressedCaret.png", ArrowWidth: 9, ArrowHeight: 18, LabelStyle: { TextColor: "#96a9be", RenderBold: !0, VerticalAlignment: "Center", FontSize: 18 }, HorizontalPadding: 14, PanelAlign: "Bottom", PanelOffset: 7, Sounds: c.DropdownBox() }),
  DefaultPopupMenuLayerStyle: () => ({ Background: { TexturePath: "Common/Popup.png", Border: 16 }, Padding: 2, BaseHeight: 5, MaxWidth: 200, TitleStyle: { RenderBold: !0, RenderUppercase: !0, FontSize: 13, TextColor: "#ccb588" }, TitleBackground: { TexturePath: "Common/PopupTitle.png" }, RowHeight: 25, ItemLabelStyle: { RenderBold: !0, RenderUppercase: !0, FontSize: 11, TextColor: "#96a9be(0.8)" }, ItemPadding: { Vertical: 5, Horizontal: 8 }, ItemBackground: { TexturePath: "Common/PopupItem.png" }, ItemIconSize: 16, HoveredItemBackground: { TexturePath: "Common/HoveredPopupItem.png" }, PressedItemBackground: { TexturePath: "Common/PressedPopupItem.png" }, ItemSounds: c.ButtonsLight() }),
  PopupTitleStyle: () => ({ FontSize: 38, LetterSpacing: 2, RenderUppercase: !0, RenderBold: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" }),
  SubtitleStyle: () => ({ FontSize: 15, RenderUppercase: !0, TextColor: "#96a9be" }),
  TitleStyle: () => ({ FontSize: 15, VerticalAlignment: "Center", RenderUppercase: !0, TextColor: "#b4c8c9", FontName: "Secondary", RenderBold: !0, LetterSpacing: 0 }),
  TitleHeight: () => 38,
  TitleOffset: () => 4,
  ContentPaddingFull: () => 17,
  ContentPadding: () => ({ Full: e.ContentPaddingFull(), Top: 8 }),
  TopTabAnchor: () => ({ Width: 82, Height: 62, Right: 5, Bottom: -14 }),
  TopTabStyle: () => ({ Background: "Common/Tab.png", Overlay: "Common/TabOverlay.png", IconAnchor: { Width: 44, Height: 44 }, Anchor: { Width: 82, Height: 62, Right: 5, Bottom: -14 } }),
  TopTabsStyle: () => ({ TabStyle: { Default: e.TopTabStyle(), Hovered: { ...e.TopTabStyle(), Anchor: { ...e.TopTabAnchor(), Bottom: -5 } }, Pressed: { ...e.TopTabStyle(), Anchor: { ...e.TopTabAnchor(), Bottom: -8 } } }, SelectedTabStyle: { Default: { ...e.TopTabStyle(), Anchor: { ...e.TopTabAnchor(), Bottom: 4 }, IconAnchor: { Width: 44, Height: 44 }, Overlay: "Common/TabSelectedOverlay.png" } } }),
  HeaderTabStyle: () => ({ Anchor: { Width: 34, Height: 34 }, IconOpacity: 0.25 }),
  HeaderTabsStyle: () => ({ TabStyle: { Default: e.HeaderTabStyle() }, SelectedTabStyle: { Default: { ...e.HeaderTabStyle(), IconOpacity: 1 } }, SeparatorAnchor: { Width: 5, Height: 34 }, SeparatorBackground: "Common/HeaderTabSeparator.png" }),
  ClearButtonStyle: () => ({ Texture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.3)" }, HoveredTexture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.5)" }, PressedTexture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.4)" }, Width: 16, Height: 16, Side: "Right", Offset: 10 }),
  HeaderTextButtonLabelStyle: () => ({ ...e.TitleStyle(), VerticalAlignment: "Center", TextColor: "#d3d6db", FontName: "Default", RenderBold: !0, LetterSpacing: 1 }),
  HeaderTextButtonStyle: () => ({ Default: { LabelStyle: e.HeaderTextButtonLabelStyle() }, Hovered: { LabelStyle: { ...e.HeaderTextButtonLabelStyle(), TextColor: "#eaebee" } }, Pressed: { LabelStyle: { ...e.HeaderTextButtonLabelStyle(), TextColor: "#b6bbc2" } } }),
  InnerPaddingValue: () => 8,
  FullPaddingValue: () => e.InnerPaddingValue() + 9,
  DefaultSliderStyle: () => ({ Background: { TexturePath: "Common/SliderBackground.png", Border: 2 }, Handle: "Common/SliderHandle.png", HandleWidth: 16, HandleHeight: 16, Sounds: { MouseHover: { SoundPath: c.ButtonsLightHover(), Volume: 6 } } }),
  DefaultTextTooltipStyle: () => ({ Background: { TexturePath: "Common/TooltipDefaultBackground.png", Border: 24 }, MaxWidth: 400, LabelStyle: { Wrap: !0, FontSize: 16 }, Padding: { Full: 24 } })
}, s = a({
  name: "Panel",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, background: { TexturePath: "Common/ContainerFullPatch.png", Border: 20 } });
  }
}), i = a({
  name: "TitleLabel",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Label", { ...r, elStyle: { FontSize: 40, Alignment: "Center" } });
  }
}), B = a({
  name: "TextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Primary.png", VerticalBorder: 12, HorizontalBorder: 80 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Primary_Hovered.png", VerticalBorder: 12, HorizontalBorder: 80 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Primary_Pressed.png", VerticalBorder: 12, HorizontalBorder: 80 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", VerticalBorder: 12, HorizontalBorder: 80 }, LabelStyle: { FontSize: 17, TextColor: "#797b7c", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 24 }, text: t.text });
  }
}), g = a({
  name: "Button",
  slots: Object,
  props: {
    defaultSquareButtonStyle: { type: null, required: !1 },
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { defaultSquareButtonStyle: r, sounds: l, anchor: d, ...u } = t;
    return () => o("Button", { ...u, elStyle: t.defaultSquareButtonStyle, anchor: t.anchor, padding: { Horizontal: 24 } });
  }
}), m = a({
  name: "CancelTextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Destructive.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Destructive_Hovered.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Destructive_Pressed.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bfcdd5", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 24 }, text: t.text });
  }
}), p = a({
  name: "CancelButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number,
      default: e.DefaultButtonHeight
    }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, width: d, ...u } = t;
    return () => o("Button", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Destructive.png", Border: 12 } }, Hovered: { Background: { TexturePath: "Common/Buttons/Destructive_Hovered.png", Border: 12 } }, Pressed: { Background: { TexturePath: "Common/Buttons/Destructive_Pressed.png", Border: 12 } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 } }, Sounds: t.sounds }, anchor: t.anchor });
  }
}), S = a({
  name: "SmallSecondaryTextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: 12 }, LabelStyle: { FontSize: 14, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: 12 }, LabelStyle: { FontSize: 14, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: 12 }, LabelStyle: { FontSize: 14, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 }, LabelStyle: { FontSize: 14, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 16 }, text: t.text });
  }
}), C = a({
  name: "SmallTertiaryTextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Tertiary.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Tertiary_Hovered.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Tertiary_Pressed.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 16 }, text: t.text });
  }
}), h = a({
  name: "SecondaryTextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 24 }, text: t.text });
  }
}), b = a({
  name: "SecondaryButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number,
      default: e.DefaultButtonHeight
    }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, width: d, ...u } = t;
    return () => o("Button", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Secondary.png", Border: 12 } }, Hovered: { Background: { TexturePath: "Common/Buttons/Secondary_Hovered.png", Border: 12 } }, Pressed: { Background: { TexturePath: "Common/Buttons/Secondary_Pressed.png", Border: 12 } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 } }, Sounds: t.sounds }, anchor: t.anchor });
  }
}), y = a({
  name: "TertiaryTextButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, text: d, ...u } = t;
    return () => o("TextButton", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Tertiary.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Hovered: { Background: { TexturePath: "Common/Buttons/Tertiary_Hovered.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Pressed: { Background: { TexturePath: "Common/Buttons/Tertiary_Pressed.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 }, LabelStyle: { FontSize: 17, TextColor: "#bdcbd3", RenderBold: !0, RenderUppercase: !0, HorizontalAlignment: "Center", VerticalAlignment: "Center" } }, Sounds: t.sounds }, anchor: t.anchor, padding: { Horizontal: 24 }, text: t.text });
  }
}), P = a({
  name: "TertiaryButton",
  slots: Object,
  props: {
    sounds: {
      type: Object,
      default: () => ({})
    },
    anchor: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number,
      default: e.DefaultButtonHeight
    }
  },
  setup(t, { slots: n }) {
    const { sounds: r, anchor: l, width: d, ...u } = t;
    return () => o("Button", { ...u, elStyle: { Default: { Background: { TexturePath: "Common/Buttons/Tertiary.png", Border: 12 } }, Hovered: { Background: { TexturePath: "Common/Buttons/Tertiary_Hovered.png", Border: 12 } }, Pressed: { Background: { TexturePath: "Common/Buttons/Tertiary_Pressed.png", Border: 12 } }, Disabled: { Background: { TexturePath: "Common/Buttons/Disabled.png", Border: 12 } }, Sounds: t.sounds }, anchor: t.anchor });
  }
}), T = a({
  name: "CloseButton",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Button", { ...r, anchor: { Top: -16, Right: -16, Width: 32, Height: 32 }, elStyle: { Default: { Background: "Common/ContainerCloseButton.png" }, Hovered: { Background: "Common/ContainerCloseButtonHovered.png" }, Pressed: { Background: "Common/ContainerCloseButtonPressed.png" } } });
  }
}), x = a({
  name: "CheckBox",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("CheckBox", { ...r, anchor: { Width: 22, Height: 22 }, background: { TexturePath: "Common/CheckBoxFrame.png", Border: 7 }, padding: { Full: 4 }, elStyle: { Unchecked: { DefaultBackground: { Color: "#00000000" }, HoveredBackground: { Color: "#00000000" }, PressedBackground: { Color: "#00000000" }, DisabledBackground: { Color: "#424242" }, ChangedSound: { SoundPath: "Sounds/UntickActivate.ogg", Volume: 6 } }, Checked: { DefaultBackground: { TexturePath: "Common/Checkmark.png" }, HoveredBackground: { TexturePath: "Common/Checkmark.png" }, PressedBackground: { TexturePath: "Common/Checkmark.png" }, ChangedSound: { SoundPath: "Sounds/TickActivate.ogg", Volume: 6 } } } });
  }
}), f = a({
  name: "CheckBoxWithLabel",
  slots: Object,
  props: {
    checked: {
      type: Boolean,
      default: () => !1
    },
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { checked: r, text: l, ...d } = t;
    return () => o("Group", { ...d, layoutMode: "Left" }, [
      o("CheckBox", { anchor: { Width: 22, Height: 22 }, background: { TexturePath: "Common/CheckBoxFrame.png", Border: 7 }, padding: { Full: 4 }, elStyle: { Unchecked: { DefaultBackground: { Color: "#00000000" }, HoveredBackground: { Color: "#00000000" }, PressedBackground: { Color: "#00000000" }, DisabledBackground: { Color: "#424242" }, ChangedSound: { SoundPath: "Sounds/UntickActivate.ogg", Volume: 6 } }, Checked: { DefaultBackground: { TexturePath: "Common/Checkmark.png" }, HoveredBackground: { TexturePath: "Common/Checkmark.png" }, PressedBackground: { TexturePath: "Common/Checkmark.png" }, ChangedSound: { SoundPath: "Sounds/TickActivate.ogg", Volume: 6 } } }, value: t.checked, id: "CheckBox" }),
      o("Label", { text: t.text, anchor: { Right: 30, Left: 11 }, elStyle: { FontSize: 16, TextColor: "#96a9be", VerticalAlignment: "Center" } })
    ]);
  }
}), D = a({
  name: "TextField",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("TextField", { ...l, elStyle: {}, placeholderStyle: { TextColor: "#6e7da1" }, background: { TexturePath: "Common/InputBox.png", Border: 16 }, anchor: t.anchor, padding: { Horizontal: 10 } });
  }
}), k = a({
  name: "NumberField",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("NumberField", { ...l, elStyle: {}, placeholderStyle: { TextColor: "#6e7da1" }, background: { TexturePath: "Common/InputBox.png", Border: 16 }, anchor: t.anchor, padding: { Horizontal: 10 } });
  }
}), H = a({
  name: "DropdownBox",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("DropdownBox", { ...l, anchor: t.anchor, elStyle: { DefaultBackground: { TexturePath: "Common/Dropdown.png", Border: 16 }, HoveredBackground: { TexturePath: "Common/DropdownHovered.png", Border: 16 }, PressedBackground: { TexturePath: "Common/DropdownPressed.png", Border: 16 }, DefaultArrowTexturePath: "Common/DropdownCaret.png", HoveredArrowTexturePath: "Common/DropdownCaret.png", PressedArrowTexturePath: "Common/DropdownPressedCaret.png", ArrowWidth: 13, ArrowHeight: 18, LabelStyle: { TextColor: "#96a9be", RenderUppercase: !0, VerticalAlignment: "Center", FontSize: 13 }, EntryLabelStyle: { TextColor: "#b7cedd", RenderUppercase: !0, VerticalAlignment: "Center", FontSize: 13 }, NoItemsLabelStyle: { TextColor: "#b7cedd(0.5)", RenderUppercase: !0, VerticalAlignment: "Center", FontSize: 13 }, SelectedEntryLabelStyle: { TextColor: "#b7cedd", RenderUppercase: !0, VerticalAlignment: "Center", FontSize: 13, RenderBold: !0 }, HorizontalPadding: 8, PanelScrollbarStyle: { Spacing: 6, Size: 6, Background: { TexturePath: "Common/Scrollbar.png", Border: 3 }, Handle: { TexturePath: "Common/ScrollbarHandle.png", Border: 3 }, HoveredHandle: { TexturePath: "Common/ScrollbarHandleHovered.png", Border: 3 }, DraggedHandle: { TexturePath: "Common/ScrollbarHandleDragged.png", Border: 3 } }, PanelBackground: { TexturePath: "Common/DropdownBox.png", Border: 16 }, PanelPadding: 6, PanelAlign: "Right", PanelOffset: 7, EntryHeight: 31, EntriesInViewport: 10, HorizontalEntryPadding: 7, HoveredEntryBackground: { Color: "#0a0f17" }, PressedEntryBackground: { Color: "#0f1621" }, Sounds: { Activate: { SoundPath: "Sounds/TickActivate.ogg", Volume: 6 }, MouseHover: { SoundPath: "Sounds/ButtonsLightHover.ogg", Volume: 6 }, Close: { SoundPath: "Sounds/ButtonsCancelActivate.ogg", Volume: 6 } }, EntrySounds: { Activate: { SoundPath: "Sounds/ButtonsLightActivate.ogg", MinPitch: -0.4, MaxPitch: 0.4, Volume: 4 }, MouseHover: { SoundPath: "Sounds/ButtonsLightHover.ogg", Volume: 6 } }, FocusOutlineSize: 1, FocusOutlineColor: "#ffffff(0.4)" } });
  }
}), v = a({
  name: "ContentSeparator",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("Group", { ...l, anchor: t.anchor, background: { Color: "#2b3542" } });
  }
}), L = a({
  name: "DefaultSpinner",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("Sprite", { ...l, anchor: t.anchor, texturePath: "Common/Spinner.png", frame: { Width: 32, Height: 32, PerRow: 8, Count: 72 }, framesPerSecond: 30 });
  }
}), A = a({
  name: "ActionButtonContainer",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, layoutMode: "Right", anchor: { Right: 50, Bottom: 50, Height: 27 } });
  }
}), z = a({
  name: "ActionButtonSeparator",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, anchor: { Width: 35 } });
  }
}), R = a({
  name: "VerticalActionButtonSeparator",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, anchor: { Height: 20 } });
  }
}), F = a({
  name: "Subtitle",
  slots: Object,
  props: {
    text: { type: null, required: !1 }
  },
  setup(t, { slots: n }) {
    const { text: r, ...l } = t;
    return () => o("Label", { ...l, elStyle: { FontSize: 15, RenderUppercase: !0, TextColor: "#96a9be" }, text: t.text, anchor: { Bottom: 10 } });
  }
}), O = a({
  name: "Title",
  slots: Object,
  props: {
    alignment: {
      type: String,
      default: () => "Center"
    },
    text: {
      type: String,
      default: () => ""
    }
  },
  setup(t, { slots: n }) {
    const { alignment: r, text: l, ...d } = t;
    return () => o("Label", { ...d, elStyle: { FontSize: 15, VerticalAlignment: "Center", RenderUppercase: !0, TextColor: "#b4c8c9", FontName: "Secondary", RenderBold: !0, LetterSpacing: 0, HorizontalAlignment: t.alignment }, padding: { Horizontal: 19 }, text: t.text });
  }
}), V = a({
  name: "HeaderSearch",
  slots: Object,
  props: {
    marginRight: {
      type: Number,
      default: () => 10
    }
  },
  setup(t, { slots: n }) {
    const { marginRight: r, ...l } = t;
    return () => o("Group", { ...l, anchor: { Width: 200, Right: 0 } }, [
      o("CompactTextField", { anchor: { Height: 30, Right: t.marginRight }, collapsedWidth: 34, expandedWidth: 200, placeholderText: "%server.customUI.searchPlaceholder", elStyle: { FontSize: 16 }, placeholderStyle: { TextColor: "#3d5a85", RenderUppercase: !0, FontSize: 14 }, padding: { Horizontal: 12, Left: 34 }, decoration: { Default: { Icon: { Texture: "Common/SearchIcon.png", Width: 16, Height: 16, Offset: 9 }, ClearButtonStyle: { Texture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.3)" }, HoveredTexture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.5)" }, PressedTexture: { TexturePath: "Common/ClearInputIcon.png", Color: "#ffffff(0.4)" }, Width: 16, Height: 16, Side: "Right", Offset: 10 } } }, id: "SearchInput" })
    ]);
  }
}), w = a({
  name: "HeaderTextButton",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("TextButton", { ...r, elStyle: { Default: { LabelStyle: { FontSize: 15, VerticalAlignment: "Center", RenderUppercase: !0, TextColor: "#d3d6db", FontName: "Default", RenderBold: !0, LetterSpacing: 1 } }, Hovered: { LabelStyle: { FontSize: 15, VerticalAlignment: "Center", RenderUppercase: !0, TextColor: "#eaebee", FontName: "Default", RenderBold: !0, LetterSpacing: 1 } }, Pressed: { LabelStyle: { FontSize: 15, VerticalAlignment: "Center", RenderUppercase: !0, TextColor: "#b6bbc2", FontName: "Default", RenderBold: !0, LetterSpacing: 1 } } }, padding: { Right: 22, Left: 15, Bottom: 1 } });
  }
}), j = a({
  name: "HeaderSeparator",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, anchor: { Width: 5, Height: 34 }, background: "Common/HeaderTabSeparator.png" });
  }
}), I = a({
  name: "PanelTitle",
  slots: Object,
  props: {
    alignment: {
      type: String,
      default: () => "Start"
    },
    text: {
      type: String,
      default: () => ""
    }
  },
  setup(t, { slots: n }) {
    const { alignment: r, text: l, ...d } = t;
    return () => o("Group", { ...d, layoutMode: "Top" }, [
      o("Label", { elStyle: { RenderBold: !0, VerticalAlignment: "Center", FontSize: 15, TextColor: "#afc2c3", HorizontalAlignment: t.alignment }, anchor: { Height: 35, Horizontal: 8 }, text: t.text, id: "PanelTitle" }),
      o("Group", { background: "#393426(0.5)", anchor: { Height: 1 } })
    ]);
  }
}), U = a({
  name: "VerticalSeparator",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, background: { TexturePath: "Common/ContainerVerticalSeparator.png" }, anchor: { Width: 6, Top: -2 } });
  }
}), W = a({
  name: "PanelSeparatorFancy",
  slots: Object,
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
    const { anchor: r, ...l } = t;
    return () => o("Group", { ...l, layoutMode: "Left", anchor: t.anchor }, [
      o("Group", { flexWeight: 1, background: "Common/ContainerPanelSeparatorFancyLine.png" }),
      o("Group", { anchor: { Width: 11 }, background: "Common/ContainerPanelSeparatorFancyDecoration.png" }),
      o("Group", { flexWeight: 1, background: "Common/ContainerPanelSeparatorFancyLine.png" })
    ]);
  }
}), _ = a({
  name: "Container",
  slots: Object,
  props: {
    contentPadding: {
      type: Object,
      default: () => ({ Full: e.FullPaddingValue() })
    },
    closeButton: {
      type: Boolean,
      default: () => !1
    }
  },
  setup(t, { slots: n }) {
    const { contentPadding: r, closeButton: l, ...d } = t;
    return () => o("Group", { ...d }, [
      o("Group", { anchor: { Height: 38, Top: 0 }, padding: { Top: 7 }, background: { TexturePath: "Common/ContainerHeaderNoRunes.png", HorizontalBorder: 35, VerticalBorder: 0 }, id: "Title" }, n.title ? n.title() : []),
      o("Group", { layoutMode: "Top", padding: t.contentPadding, anchor: { Top: 38 }, background: { TexturePath: "Common/ContainerPatch.png", Border: 23 }, id: "Content" }, n.content ? n.content() : []),
      o("Button", { anchor: { Width: 32, Height: 32, Top: -8, Right: -8 }, elStyle: { Default: { Background: "Common/ContainerCloseButton.png" }, Hovered: { Background: "Common/ContainerCloseButtonHovered.png" }, Pressed: { Background: "Common/ContainerCloseButtonPressed.png" }, Sounds: { Activate: { SoundPath: "Sounds/ButtonsCancelActivate.ogg", MinPitch: -0.4, MaxPitch: 0.4, Volume: 6 }, MouseHover: { SoundPath: "Sounds/ButtonsLightHover.ogg", Volume: 6 } } }, visible: t.closeButton, id: "CloseButton" }, n.closeButton ? n.closeButton() : [])
    ]);
  }
}), G = a({
  name: "DecoratedContainer",
  slots: Object,
  props: {
    contentPadding: {
      type: Object,
      default: () => ({ Full: 17 })
    },
    closeButton: {
      type: Boolean,
      default: () => !1
    }
  },
  setup(t, { slots: n }) {
    const { contentPadding: r, closeButton: l, ...d } = t;
    return () => o("Group", { ...d }, [
      o("Group", { anchor: { Height: 38, Top: 0 }, background: { TexturePath: "Common/ContainerHeader.png", HorizontalBorder: 50, VerticalBorder: 0 }, padding: { Top: 7 }, id: "Title" }, n.title ? n.title() : [o("Group", { anchor: { Width: 236, Height: 11, Top: -12 }, background: "Common/ContainerDecorationTop.png", id: "ContainerDecorationTop" })]),
      o("Group", { layoutMode: "Top", anchor: { Top: 38 }, padding: t.contentPadding, background: { TexturePath: "Common/ContainerPatch.png", Border: 23 }, id: "Content" }, n.content ? n.content() : []),
      o("Group", { anchor: { Width: 236, Height: 11, Bottom: -6 }, background: "Common/ContainerDecorationBottom.png", id: "ContainerDecorationBottom" }),
      o("Button", { anchor: { Width: 32, Height: 32, Top: -8, Right: -8 }, elStyle: { Default: { Background: "Common/ContainerCloseButton.png" }, Hovered: { Background: "Common/ContainerCloseButtonHovered.png" }, Pressed: { Background: "Common/ContainerCloseButtonPressed.png" }, Sounds: { Activate: { SoundPath: "Sounds/ButtonsCancelActivate.ogg", MinPitch: -0.4, MaxPitch: 0.4, Volume: 6 }, MouseHover: { SoundPath: "Sounds/ButtonsLightHover.ogg", Volume: 6 } } }, visible: t.closeButton, id: "CloseButton" }, n.closeButton ? n.closeButton() : [])
    ]);
  }
}), M = a({
  name: "PageOverlay",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, background: "#000000(0.45)" });
  }
}), E = a({
  name: "BackButton",
  slots: Object,
  props: {},
  setup(t, { slots: n }) {
    const r = t;
    return () => o("Group", { ...r, layoutMode: "Left", anchor: { Left: 50, Bottom: 50, Width: 110, Height: 27 } }, [
      o("BackButton", {})
    ]);
  }
}), $ = {
  Panel: s,
  TitleLabel: i,
  TextButton: B,
  Button: g,
  CancelTextButton: m,
  CancelButton: p,
  SmallSecondaryTextButton: S,
  SmallTertiaryTextButton: C,
  SecondaryTextButton: h,
  SecondaryButton: b,
  TertiaryTextButton: y,
  TertiaryButton: P,
  CloseButton: T,
  CheckBox: x,
  CheckBoxWithLabel: f,
  TextField: D,
  NumberField: k,
  DropdownBox: H,
  ContentSeparator: v,
  DefaultSpinner: L,
  ActionButtonContainer: A,
  ActionButtonSeparator: z,
  VerticalActionButtonSeparator: R,
  Subtitle: F,
  Title: O,
  HeaderSearch: V,
  HeaderTextButton: w,
  HeaderSeparator: j,
  PanelTitle: I,
  VerticalSeparator: U,
  PanelSeparatorFancy: W,
  Container: _,
  DecoratedContainer: G,
  PageOverlay: M,
  BackButton: E
};
export {
  $ as Common,
  e as Vars
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
