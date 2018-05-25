(ns figwheel.connect.build-dev (:require [district.ui.reagent-render] [figwheel.client] [figwheel.client.utils] [tcrfactory.ui.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/district.ui.reagent-render.rerender (apply js/district.ui.reagent-render.rerender x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'district.ui.reagent-render/rerender' is missing"))), :build-id "dev", :websocket-url "ws://localhost:4787/figwheel-ws"})

