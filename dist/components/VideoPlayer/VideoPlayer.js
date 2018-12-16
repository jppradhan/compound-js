var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import cx from "classnames";
import styles from "./styles.css";
var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapper = null;
        _this.getListHeight = function () {
            if (_this.wrapper) {
                return _this.wrapper.offsetHeight - 20 + "px";
            }
            return "0px";
        };
        _this.onSelectVideo = function (video, index) {
            _this.setState({
                selectedVideo: video,
                selectedVideoIndex: index
            });
        };
        _this.state = {
            selectedVideo: _this.props.videos[0],
            listHeight: "0px",
            selectedVideoIndex: 0
        };
        return _this;
    }
    VideoPlayer.prototype.componentDidMount = function () {
        this.setState({
            listHeight: this.getListHeight()
        });
    };
    VideoPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, videos = _a.videos, children = _a.children;
        return (React.createElement("div", { className: styles.videoWrapper, ref: function (e) { return (_this.wrapper = e); } },
            React.createElement("div", { className: styles.videoList, style: { height: this.state.listHeight } }, videos.map(function (video, v) {
                var _a;
                return (React.createElement("div", { className: cx((_a = {},
                        _a[styles.previewItem] = true,
                        _a[styles.selected] = _this.state.selectedVideoIndex === v,
                        _a)), onClick: function () { return _this.onSelectVideo(video, v); }, key: "PREVIEW__" + v },
                    React.createElement("img", { src: video.thumb, className: styles.previewThumb }),
                    React.createElement("div", { className: styles.title },
                        React.createElement("h4", null, video.title))));
            })),
            React.createElement("div", { className: styles.videoContainer }, children(this.state.selectedVideo))));
    };
    return VideoPlayer;
}(React.Component));
export { VideoPlayer };
